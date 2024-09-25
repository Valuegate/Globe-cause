// import styles from "./styles.module.css";

// import React, { useState, useContext } from "react";
// import imge from "../../../assets/Group 11966.png";
// import { useUserAuth } from "../../../hooks/auth/UserAuthContext";
// import { UserAthorizationContext } from "../../../hooks/authorization/UserAuthorizationContext";

// import { db, storage } from "../../../firebase";
// import { doc, updateDoc } from "firebase/firestore";

// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// const ProfilePicture = ({ alt, placeholder, profile_image }) => {
//   const [disabled, setDisabled] = useState(true);

//   const [image, setImage] = useState();
//   const allInputs = { imgUrl: "" };
//   const [imageAsFile, setImageAsFile] = useState("");
//   const [imageAsUrl, setImageAsUrl] = useState(allInputs);

//   const { role } = useContext(UserAthorizationContext);

//   const { user } = useUserAuth();

//   const handleImageAsFile = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setImage(URL.createObjectURL(e.target.files[0]));
//     }
//     const image = e.target.files[0];
//     setImageAsFile((imageFile) => image);
//     setDisabled(false);
//   };

//   const handleFireBaseUpload = (e) => {
//     e.preventDefault();
//     // async magic goes here...
//     if (imageAsFile === "") {
//       alert(`not an image, the image file is a ${typeof imageAsFile}`);
//       return;
//     }
//     const uploadTask =
//       role === "volunteer"
//         ? uploadBytes(
//             ref(
//               storage,
//               `volunteer_profile_images/${user.uid}/${imageAsFile.name}`
//             ),
//             imageAsFile
//           )
//         : uploadBytes(
//             ref(
//               storage,
//               `organzation_${role}_profile_images/${user.uid}/${imageAsFile.name}`
//             ),
//             imageAsFile
//           );

//     //initiates the firebase side uploading
//     uploadTask.then((snapshot) => {
//       console.log(snapshot);
//       alert("Image uploaded successfully");
//       // gets the functions from storage refences the image storage in firebase by the children
//       // gets the download url then sets the image from firebase as the value for the imgUrl key:
//       Promise.resolve(getDownloadURL(snapshot.ref)).then((url) => {
//         setImageAsUrl((prevObject) => ({
//           ...prevObject,
//           imgUrl: url,
//         }));
//         console.log(imageAsUrl.imgUrl);
//         if (role === "volunteer") {
//           createProfile(user.uid, url, "volunteers");
//         } else {
//           createProfile(user.uid, url, `organisations_${role}`);
//         }
//       });
//     });
//   };
//   const createProfile = async (id, image, database) => {
//     updateDoc(doc(db, database, id), {
//       profile_image_url: image,
//     })
//       .then(() => {
//         console.log("Suuccessfully updated profile image");
//       })
//       .catch((error) => {
//         console.error("Error writing document: ", error);
//       });
//   };

//   return (
//     <form runat="server">
//       <label for="inputTag" style={{ cursor: "pointer" }}>
//         <div className={styles.ProfilePicture}>
//           <img
//             src={image || profile_image || imageAsUrl.imgUrl || imge}
//             alt={alt}
//           />
//           <div className={styles.SelectImage}>
//             <p>Select Image</p>
//           </div>
//         </div>
//         <input
//           id="inputTag"
//           accept="image/*"
//           style={{ display: "none" }}
//           type="file"
//           placeholder={placeholder}
//           onChange={handleImageAsFile}
//         />
//       </label>
//       <button
//         className={styles.UploadButton}
//         onClick={handleFireBaseUpload}
//         disabled={disabled}
//       >
//         Upload
//       </button>
//     </form>
//   );
// };

// export default ProfilePicture;


import styles from "./styles.module.css";
import React, { useState, useContext } from "react";
import imge from "../../../assets/Group 11966.png";
import { useUserAuth } from "../../../hooks/auth/UserAuthContext";
import { UserAthorizationContext } from "../../../hooks/authorization/UserAuthorizationContext";
import axios from "axios"; // Import axios for HTTP requests

const ProfilePicture = ({ alt, placeholder, profile_image }) => {
  const [disabled, setDisabled] = useState(true);
  const [image, setImage] = useState();
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState({ imgUrl: "" });

  useContext(UserAthorizationContext);
  const { user } = useUserAuth();

  const handleImageAsFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
    const image = e.target.files[0];
    setImageAsFile(() => image);
    setDisabled(false);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    
    if (!imageAsFile) {
      alert(`Please select an image file.`);
      return;
    }

    const formData = new FormData();
    formData.append("file", imageAsFile); // Append the file to FormData
    formData.append("uid", user.uid); // Append the user ID or any additional data needed

    try {
      const response = await axios.post("YOUR_API_ENDPOINT/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Assuming your API returns the URL of the uploaded image
      const uploadedImageUrl = response.data.url; 

      setImageAsUrl({ imgUrl: uploadedImageUrl });
      createProfile(user.uid, uploadedImageUrl); // Call the profile update function
      alert("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image");
    }
  };

  const createProfile = async (id, image) => {
    try {
      await axios.put(`YOUR_API_ENDPOINT/profile/${id}`, {
        profile_image_url: image,
      });
      console.log("Successfully updated profile image");
    } catch (error) {
      console.error("Error updating profile image:", error);
    }
  };

  return (
    <form>
      <label htmlFor="inputTag" style={{ cursor: "pointer" }}>
        <div className={styles.ProfilePicture}>
          <img
            src={image || profile_image || imageAsUrl.imgUrl || imge}
            alt={alt}
          />
          <div className={styles.SelectImage}>
            <p>Select Image</p>
          </div>
        </div>
        <input
          id="inputTag"
          accept="image/*"
          style={{ display: "none" }}
          type="file"
          placeholder={placeholder}
          onChange={handleImageAsFile}
        />
      </label>
      <button
        className={styles.UploadButton}
        onClick={handleUpload}
        disabled={disabled}
      >
        Upload
      </button>
    </form>
  );
};

export default ProfilePicture;

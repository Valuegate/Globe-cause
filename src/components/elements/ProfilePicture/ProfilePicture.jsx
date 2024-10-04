// import styles from "./styles.module.css";
// import React, { useState } from "react";
// import imge from "../../../assets/Group 11966.png";
// import { useUserAuth } from "../../../hooks/auth/UserAuthContext";
// import axios from "axios";

// const ProfilePicture = ({ alt, placeholder, profile_image }) => {
//   const [disabled, setDisabled] = useState(true);
//   const [image, setImage] = useState();
//   const [imageAsFile, setImageAsFile] = useState("");
//   const [imageAsUrl, setImageAsUrl] = useState({ imgUrl: "" });
//   const [uploadError, setUploadError] = useState("");

//   const { user } = useUserAuth();
//   console.log(user)

//   const handleImageAsFile = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setImage(URL.createObjectURL(e.target.files[0]));
//     }
//     const image = e.target.files[0];
//     setImageAsFile(image);
//     setDisabled(false);
//   };

//   const handleUpload = async (e) => {
//     e.preventDefault();
    
//     if (!imageAsFile) {
//       alert("Please select an image file.");
//       return;
//     }
  
//     // Check if user is defined
//     if (!user) {
//       console.error("User is not authenticated or user data is unavailable.");
//       setUploadError("User not authenticated. Please log in.");
//       return;
//     }
  
//     const formData = new FormData();
//     formData.append("file", imageAsFile);
//     // formData.append("uid", user.uid);
  
//     try {
//       const token = localStorage.getItem('token');
  
//       if (!token) {
//         console.error("No token found");
//         return;
//       }
  
//       const response = await axios.post("https://scoutflair.top:8081/globeCause/v1/file/picture/upload", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       });
  
//       const uploadedImageUrl = response.data.url; 
  
//       setImageAsUrl({ imgUrl: uploadedImageUrl });
//       alert("Image uploaded successfully");
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       setUploadError("Failed to upload image. Please try again.");
//     }
//   };
  

//   return (
//     <form>
//       <label htmlFor="inputTag" style={{ cursor: "pointer" }}>
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
//         onClick={handleUpload}
//         disabled={disabled}
//       >
//         Upload
//       </button>
//       {uploadError && <p className={styles.Error}>{uploadError}</p>}
//     </form>
//   );
// };

// export default ProfilePicture;


import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";
import imge from "../../../assets/Group 11966.png";
import axios from "axios";

const ProfilePicture = ({ alt, placeholder, profile_image }) => {
  const [disabled, setDisabled] = useState(true);
  const [image, setImage] = useState(null); // State for selected image preview
  const [imageAsFile, setImageAsFile] = useState(""); // State for image file to upload
  const [imageAsUrl, setImageAsUrl] = useState({ imgUrl: "" }); // State for the uploaded image URL
  const [uploadError, setUploadError] = useState(""); // State for error handling

  // Fetch profile image on mount
  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          return;
        }

        // Fetch the user profile with image URL
        const response = await axios.get(
          "https://scoutflair.top:8081/api/v1/profile/getProfile", // Adjust the API endpoint if necessary
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const userProfile = response.data.data.obj;
        if (userProfile.imageUrl) {
          setImageAsUrl({ imgUrl: userProfile.imageUrl });
        }
      } catch (error) {
        console.error("Error fetching profile image:", error);
      }
    };

    fetchProfileImage();
  }, []);

  const handleImageAsFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
    const image = e.target.files[0];
    setImageAsFile(image);
    setDisabled(false);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!imageAsFile) {
      alert("Please select an image file.");
      return;
    }

    const token = localStorage.getItem("token")

    if (!token) {
      console.error("User is not authenticated or user data is unavailable.");
      setUploadError("User not authenticated. Please log in.");
      return;
    }

    const formData = new FormData();
    formData.append("file", imageAsFile);

    try {

      const response = await axios.post(
        "https://scoutflair.top:8081/globeCause/v1/file/picture/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const uploadedImageUrl = response.data.url;

      setImageAsUrl({ imgUrl: uploadedImageUrl });
      alert("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploadError("Failed to upload image. Please try again.");
    }
  };

  return (
    <form>
      <label htmlFor="inputTag" style={{ cursor: "pointer" }}>
        <div className={styles.ProfilePicture}>
          <img
            src={image || imageAsUrl.imgUrl || profile_image || imge}
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
      {uploadError && <p className={styles.Error}>{uploadError}</p>}
    </form>
  );
};

export default ProfilePicture;

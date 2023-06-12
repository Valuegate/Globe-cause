import styles from "./styles.module.css";

import { useState, useContext } from "react";
import imge from "../../../assets/Group 11966.png";
import { useUserAuth } from "../../../hooks/auth/UserAuthContext";
import { UserAthorizationContext } from "../../../hooks/authorization/UserAuthorizationContext";

import { db, storage } from "../../../firebase";
import { doc, updateDoc } from "firebase/firestore";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ProfilePicture = ({ alt, placeholder, profile_image }) => {
  const [image, setImage] = useState();
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);

  const { role } = useContext(UserAthorizationContext);

  const { user } = useUserAuth();

  const handleImageAsFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };

  const handleFireBaseUpload = (e) => {
    e.preventDefault();
    // async magic goes here...
    if (imageAsFile === "") {
      alert(`not an image, the image file is a ${typeof imageAsFile}`);
    }
    const uploadTask = uploadBytes(
      ref(storage, `images/${imageAsFile.name}`),
      imageAsFile
    );
    //initiates the firebase side uploading
    uploadTask.then((snapshot) => {
      console.log(snapshot);
      alert("Image uploaded successfully");
      // gets the functions from storage refences the image storage in firebase by the children
      // gets the download url then sets the image from firebase as the value for the imgUrl key:
      Promise.resolve(getDownloadURL(snapshot.ref)).then((url) => {
        setImageAsUrl((prevObject) => ({
          ...prevObject,
          imgUrl: url,
        }));
        console.log(imageAsUrl.imgUrl);
        if (role === "volunteer") {
          createProfile(user.uid, url, "volunteers");
        } else {
          createProfile(user.uid, url, `organisations_${role}`);
        }
      });
    });
  };
  const createProfile = async (id, image, database) => {
    updateDoc(doc(db, database, id), {
      profile_image_url: image,
    })
      .then(() => {
        console.log("Suuccessfully updated profile image");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  return (
    <form runat="server">
      <label for="inputTag" style={{ cursor: "pointer" }}>
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
      <button className={styles.UploadButton} onClick={handleFireBaseUpload}>
        Upload
      </button>
    </form>
  );
};

export default ProfilePicture;

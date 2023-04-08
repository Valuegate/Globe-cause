import styles from "./styles.module.css";
import {useState} from 'react'
import imge from '../../../assets/Group 11966.png'
import { useUserAuth } from "../../../hooks/auth/UserAuthContext";

import { db } from "../../../firebase";
import {  doc, setDoc } from "firebase/firestore";

const ProfilePicture = ({  alt, placeholder }) => {

const [src, setImage] = useState([imge,])

const {  user } = useUserAuth();

const onImageChange = (event) => {
 if (event.target.files && event.target.files[0]) {
   setImage(URL.createObjectURL(event.target.files[0]));
 }
}

 const createProfile = async (id) => {
    await onImageChange()
    setDoc(doc(db, "volunteers", id), {
      profile_image_url: src,
    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };
  return (
      <form runat="server">
        <label for="inputTag" style={{cursor:'pointer'}} >
          <div className={styles.ProfilePicture}>
            <img  src={src} alt={alt} />
            </div>
         <input id="inputTag" accept="image/*" style={{display:'none'}} type='file' placeholder={placeholder} onChange={onImageChange} />
         </label>
        </form>
  );
};

export default ProfilePicture;

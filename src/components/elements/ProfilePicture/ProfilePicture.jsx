import styles from "./styles.module.css";
import {useState, useEffect} from 'react'
import imge from '../../../assets/Group 11966.png'
import { useUserAuth } from "../../../hooks/auth/UserAuthContext";

import { db } from "../../../firebase";
import {  doc, setDoc, getDoc } from "firebase/firestore";

const ProfilePicture = ({  alt, placeholder,pic,userDetail}) => {

const [src, setImage] = useState('');

const {  user } = useUserAuth();

 

const onImageChange = (e) => {
 if (e.target?.files && e.target?.files[0]) {
   setImage(URL.createObjectURL(e.target.files[0]));
   if (user){
    createProfile(user.uid);
   }
 }
 
}



 const createProfile = async (id) => {
    await   setDoc(doc(db, "volunteers", id), {
      // country: userDetail.country,
      // date_created: userDetail.date_created,
      email: userDetail.email,
      name: userDetail.name,
      phone_number: userDetail.phone_number,
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
        <label htmlFor="inputTag" style={{cursor:'pointer'}} >
          <div className={styles.ProfilePicture}>
            <img  src={src||pic} alt={alt} />
            </div>
         <input id="inputTag" accept="image/*" style={{display:'none'}} type='file' placeholder={placeholder} onChange={(e)=>onImageChange(e)} />
         </label>
        </form>
  );
};

export default ProfilePicture;

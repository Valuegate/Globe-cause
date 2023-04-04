import styles from "./styles.module.css";
import {useState} from 'react'
import imge from '../../../assets/myPhoto.JPG'

const ProfilePicture = ({  alt, placeholder }) => {

const [src, setImage] = useState([imge,])

const onImageChange = (event) => {
 if (event.target.files && event.target.files[0]) {
   setImage(URL.createObjectURL(event.target.files[0]));
 }
}
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

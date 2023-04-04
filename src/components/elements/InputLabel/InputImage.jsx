import styles from "./styles.module.css";
import {useState} from 'react'
import Label from "../Label/Label";
import imge from '../../../assets/Group 11966.png'

const InputImage = ({ label, placeholder, onChange }) => {
 const [image, setImage] = useState([imge,])

const onImageChange = (event) => {
 if (event.target.files && event.target.files[0]) {
   setImage(URL.createObjectURL(event.target.files[0]));
 }
}
  return (
    <div className={styles.InputLabel}>
      <Label text={label} />
      <div className=''>
        <form runat="server">
        <label for="inputTag" style={{cursor:'pointer'}} >
            <img  src={image } style={{width:'68px',height:'54px'}} alt="" />
        <input id="inputTag" accept="image/*" style={{display:'none'}} type='file' placeholder={placeholder} onChange={onChange||onImageChange} />
        </label>
        </form>
      </div>
    </div>
  );
};

export default InputImage;

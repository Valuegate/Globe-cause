import React from 'react'
import InputImage from "../../../components/elements/InputLabel/InputImage";
import styles from "./styles.module.css";


const ProfileSetup3 = () => {
  return (
   <div className={styles.EditProfile3}>
        <InputImage label="Upload a logo " />
        <p className={styles.Text}>Upload Cover photo</p>
        <div className={styles.Image} >
            <InputImage label=" " />
            <InputImage label="" />
            <InputImage label="" />
        </div>
        <p className={styles.Text} >Upload photos </p>
        <div className={styles.Image} >
            <InputImage label="" />
            <InputImage label="" />
            <InputImage label="" />
        </div>
    </div>
  )
}

export default ProfileSetup3
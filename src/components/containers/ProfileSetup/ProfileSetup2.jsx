import React from 'react'
import InputLabel from '../../elements/InputLabel/InputLabel'
import styles from "./styles.module.css";

import AuthenticationButton from "../../../components/elements/AuthenticationButton/AuthenticationButton";


const ProfileSetup2 = () => {
  return (
    <div className={styles.EditProfile}>
        <InputLabel label='Phone Number' type='text' placeholder='' />
        <InputLabel label='Website address' type='text' placeholder='' />
        <InputLabel label='LinkedIn' type='text' placeholder='' />
        <InputLabel label='Facebook' type='text' placeholder='' />
        <InputLabel label='Twitter' type='text' placeholder='' />
         <AuthenticationButton text="update" />
    </div>
  )
}

export default ProfileSetup2
import React from 'react'
import InputLabel from '../../elements/InputLabel/InputLabel'
import styles from "./styles.module.css";

import AuthenticationButton from "../../../components/elements/AuthenticationButton/AuthenticationButton";


const ProfileSetup1 = () => {
  return (
    <div className={styles.EditProfile}>
        <InputLabel label='Organisation name' type='text' placeholder='' />
        <InputLabel label='Organisation Email address' type='text' placeholder='' />
        <InputLabel label='Tagline' type='text' placeholder='' />
        <InputLabel label='OID Number' type='text' placeholder='' />
        <InputLabel label='Approx. local no. of active members' type='text' placeholder='' />
        <InputLabel label='Country' type='text' placeholder='' />
        <InputLabel label='City' type='text' placeholder='' />
        <InputLabel label='Village' type='text' placeholder='' />
         <AuthenticationButton text="update" />
    </div>
  )
}

export default ProfileSetup1
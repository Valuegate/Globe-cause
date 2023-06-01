import React from 'react'
import InputLabel from '../../elements/InputLabel/InputLabel'
import styles from "./styles.module.css";



const ProfileSetup2 = () => {
  return (
    <div className={styles.EditProfile}>
        <InputLabel label='Phone Number' type='text' placeholder='Phone Number' />
        <InputLabel label='Website address' type='text' placeholder='Website address' />
        <InputLabel label='LinkedIn' type='text' placeholder='LinkedIn' />
        <InputLabel label='Facebook' type='text' placeholder='Facebook' />
        <InputLabel label='Twitter' type='text' placeholder='Twitter' />
    </div>
  )
}

export default ProfileSetup2
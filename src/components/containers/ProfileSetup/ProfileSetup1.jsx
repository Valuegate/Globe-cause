import React from 'react'
import InputLabel from '../../elements/InputLabel/InputLabel'
import InputSelect from '../../elements/InputLabel/InputSelect';
import styles from "./styles.module.css";



const ProfileSetup1 = () => {
  return (
    <div className={styles.EditProfile}>
        <InputLabel label='Organisation name' type='text' placeholder='Organisation name' />
        <InputLabel label='Organisation Email address' type='text' placeholder='Organisation Email Address' />
        <InputLabel label='Tagline' type='text' placeholder='Tagline' />
        <InputLabel label='OID Number' type='text' placeholder='OID Number' />
        <InputLabel label='Approx. local no. of active members' type='text' placeholder='Approx. local no. of active members' />
        <InputSelect label='Country' placeholder='Country' />
        <InputLabel label='City' type='text' placeholder='City' />
    </div>
  )
}

export default ProfileSetup1
import React from 'react'
import styles from "./styles.module.css";
import imge from '../../../assets/Rectangle 2706.png'

const ProfileSetup4 = () => {
  return (
    <div>
        <div className={styles.Finish} >
            <img src={imge} alt="" />
            <p style={{fontSize:'20px',fontWeight:'700'}} >Congratulations</p>
            <p style={{fontSize:'1rem',fontWeight:'400'}}>Profile has been created successfully</p>
        </div>
    </div>
  )
}

export default ProfileSetup4
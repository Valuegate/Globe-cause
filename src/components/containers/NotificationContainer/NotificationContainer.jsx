import React from 'react'
import styles from "./styles.module.css";

const NotificationContainer = ({image,name,message,time,number}) => {
  return (
    <div className={styles.Container}>
        <div className={styles.Imageandname} >
             <div className={styles.Image} >
                <img src={image} alt="" />
            </div>
            <div className={styles.Name}  >
                <p>{name}</p>
                <p>{message}</p>
                <p>See Reply</p>
            </div>
        </div>
       
        <div className={styles.Timeandnumber} >
            <p className={styles.Time} >{time}            </p>
            <div className={styles.Number} >{number}</div>
        </div>
    </div>
  )
}

export default NotificationContainer
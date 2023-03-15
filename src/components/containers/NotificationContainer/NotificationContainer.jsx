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
                <p style={{fontWeight:'700',whiteSpace:'none',lineHeight:'.6rem'}} >{name}</p>
                <p style={{fontWeight:'400',whiteSpace:'none',lineHeight:'.6rem',fontSize:'13px'}} >{message}</p>
                <p style={{fontWeight:'700',color:'#1F4490',lineHeight:'.6rem',fontSize:'13px'}}>See Reply</p>
            </div>
        </div>
       
        <div className={styles.Timeandnumber} >
            <p style={{fontWeight:'700',fontSize:'12px'}} className={styles.Time} >{time}            </p>
            <div  className={styles.Number} >{number}</div>
        </div>
    </div>
  )
}

export default NotificationContainer
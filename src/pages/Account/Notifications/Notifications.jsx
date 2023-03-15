import React from 'react'
import BackButton from '../../../components/elements/BackButton/BackButton'
import ToggleButton from '../../../components/elements/ToggleButton/ToggleButton'
import styles from './styles.module.css'

const NotificationCard =({text})=>{
    return(
        <div className={styles.Container} >
            <p>{text}</p>
            <ToggleButton/>
        </div>
    )
}

const notification = ['General notification', 'sound','vibrate','sound update']

const Notification = () => {
  return (
    <div >
        <div  className={styles.ChangePassword}>
            <BackButton color="#0E0E0F" to="/account" />
            <h2 className={styles.PageHeader}>Notification</h2>
        </div>
        {
            notification.map((index, i)=>{
                return(
                <NotificationCard text={index} key={i} />
                )
            })
        }
    </div>
  )
}

export default Notification
import React from 'react'

import {Link} from 'react-router-dom'
import arrow from '../../../assets/Vectuor.png'
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
         <div className={styles.HeaderContainer} >
            <Link to='/account'>
            <img src={arrow} alt="" />
            </Link>
            <p style={{fontWeight:'700',textAlign:'center',fontSize:'20px'}} >Notification
            </p>
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
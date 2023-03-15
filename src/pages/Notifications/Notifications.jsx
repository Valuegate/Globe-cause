import React from 'react'
import NotificationContainer from '../../components/containers/NotificationContainer/NotificationContainer'
import dp from '../../assets/myPhoto.JPG'
import arrow from '../../assets/Vectuor.png'
import styles from "./styles.module.css";
import {Link} from 'react-router-dom'


const Notifications = () => {
  return (
    <div>
        <div className={styles.Container} >
            <Link to='/home'>
            <img src={arrow} alt="" />
            </Link>
            <p style={{fontWeight:'700',textAlign:'center',fontSize:'20px'}} >Notifications</p>
        </div>
        <NotificationContainer image={dp} name='Formative footprints' message='You have a reply...' time='11:09' number='2' />
        <NotificationContainer image={dp} name='Formative footprints' message='You have a reply...' time='11:09' number='2' />
        <NotificationContainer image={dp} name='Formative footprints' message='You have a reply...' time='11:09' number='2' />
        <NotificationContainer image={dp} name='Formative footprints' message='You have a reply...' time='11:09' number='2' />

    </div>
  )
}

export default Notifications
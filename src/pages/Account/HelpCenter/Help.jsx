import React from 'react'

import styles from './styles.module.css'
import {Link} from 'react-router-dom'
import arrow from '../../../assets/Vectuor.png'

const HelpContainer =({social,content})=>{
    return(
        <div className={styles.HelpContainer} >
            <img src={social} alt="" />
            <p>{content}</p>
        </div>
    )
}

const Help = () => {
  return (
    <div className={styles.Container}>
         <div className={styles.HeaderContainer} >
            <Link to='/account'>
            <img src={arrow} alt="" />
            </Link>
            <p style={{fontWeight:'700',textAlign:'center',fontSize:'20px'}} >Help Center
            </p>
        </div>
        <p styles={{color:"#1f4490"}} >Contact us</p>
        <HelpContainer />
    </div>
  )
}

export default Help
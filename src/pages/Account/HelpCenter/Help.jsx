import React from 'react'

import styles from './styles.module.css'
import {Link} from 'react-router-dom'
import arrow from '../../../assets/Vectuor.png'
import fb from '../../../assets/facebook.png'
import ph from '../../../assets/phone.png'
import what from '../../../assets/what.png'
import tweet from '../../../assets/tweet.png'

const HelpContainer =({social,href,content,tel})=>{
    return(
        <a href={href} style={{textDecoration:'none',color:'#000'}} target='_blank' rel="noreferrer" tel={tel} >
        <div className={styles.HelpContainer} >
            <img src={social} alt="" />
            <p style={{fontWeight:'700'}} >{content}</p>
        </div>
        </a>
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
        <p style={{color:"#1f4490"}} >Contact us</p>
        <HelpContainer social={ph} tel='' content='Phone' />
        <HelpContainer social={what} content='Whatsapp' />
        <HelpContainer social={fb} href='https://www.facebook.com/FormativeFootprint' content='Facebook' />
        <HelpContainer social={tweet} href='https://www.twitter.com/FormativeFootprint' content='Twitter' />
    </div>
  )
}

export default Help
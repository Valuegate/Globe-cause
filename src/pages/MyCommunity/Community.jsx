import React from 'react'

import styles from "./styles.module.css";

import BackButton from "../../../components/elements/BackButton/BackButton";
import Search from "../../components/elements/Search/Search";
import pic from '../../assets/Ellipse 236.png'

const Community = () => {
  return (

    <div className={styles.Home}>
        <BackButton color="#ffffff" to="/home" />
        <div className={styles.CommunityHeader} >
            <p style={{fontSize:'24px',fontWeight:'700'}} >My Community</p>
            <img src={pic} alt="" />
        </div>
        <Search />
    </div>
  )
}

export default Community
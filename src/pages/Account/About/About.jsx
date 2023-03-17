import React from 'react'
import styles from './styles.module.css'
import {Link} from 'react-router-dom'
import arrow from '../../../assets/Vectuor.png'

const About = () => {
  return (
    <div className={styles.Container}>
        <div className={styles.HeaderContainer} >
            <Link to='/account'>
            <img src={arrow} alt="" />
            </Link>
            <p style={{fontWeight:'700',textAlign:'center',fontSize:'20px'}} >About</p>
        </div>
        <div className={styles.VideoResponsive}>            
            <iframe src='https://www.youtube.com/embed/TZSFP4x8VJ8'
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
/>
        </div>
        <p style={{fontSize:'14px',lineHeight:'2.15rem',fontWeight:'400'}} >
        
        Safe & Informed Volunteering comes as a response and solution to an issue that was identified as being the cause of most of the problems shared in the European volunteering projects: the lack of previous structured and objective information regarding the community where the hosting organization is located (village/town/city – neighborhood). Most of the volunteering projects involve sharing previous information regarding the activities to be performed, the accommodation and only general information regarding the village/town/city. This may lead to a mismatch between the expectations of the volunteers and the reality that they find when they reach the place. It is highly important to know all the features of a community in terms of cost of life, quality of life quality, leisure and free time activities (culture, sports) and some other details such as the probability of people to speak english, the average age of the residents and so on.
        </p>
        <p style={{fontSize:'14px',lineHeight:'2.15rem',fontWeight:'400'}}>
       At an international level this problem increased due to the COVID-19 pandemic and related lockdown measures have produced significant interruptions in young people’s lives, the impact of which is still to be analysed and understood in the future. With borders closed and airlines grounded for almost six months, COVID-19 effectively shut down the global tourism industry at a scale never witnessed before. Besides leisure travel, restriction of movement threatened to destroy the international volunteer sector and NGOs, devastating the projects that depend on them for support. The pandemic has especially hit hard the recruitment of international volunteers, with some organisations already forced to reinvent their activities.
        </p>
    </div>
  )
}

export default About
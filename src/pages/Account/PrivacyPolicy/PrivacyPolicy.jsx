import React from 'react'

import styles from './styles.module.css'
import {Link} from 'react-router-dom'
import arrow from '../../../assets/Vectuor.png'
import BackButton from '../../../components/elements/BackButton/BackButton'

const Policy =({title, content})=>{
    return(
        <div style={{marginTop:'1rem'}}>
            <p style={{fontWeight:'700',fontSize:'20px'}}>{title}</p>
            <p style={{fontWeight:'400',marginTop:'1rem',lineHeight:'2rem',fontSize:'14px'}}>{content}</p>
        </div>
    )
}

const PrivacyPolicy = () => {
  return (
    <div className={styles.Container}>
         <div className={styles.HeaderContainer} >
            <BackButton/>
            <p style={{fontWeight:'700',textAlign:'center',fontSize:'20px'}} >Privacy 
            policy</p>
        </div>
       <Policy title='Privacy Statement' content="This privacy Statement explains our practices, including
your choices, regarding the collection use, and
disclosure of certain information, in connection with 
our service"/>
        <Policy title='Contacting Us' content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ligula elit, sodales at varius sed, malesuada in quam. In dignissim tortor sit amet ligula condimentum, non pharetra diam vestibulum. Aliquam vitae egestas diam. Morbi cursus id felis non congue. Nullam at nibh ullamcorper, fermentum justo imperdiet, sodales odio. "/>
        
        <Policy title='Collecting of information' content="Vestibulum ullamcorper erat vel tincidunt gravida. In molestie, augue quis tincidunt rutrum, turpis odio scelerisque libero, vel consectetur libero eros quis eros. Praesent ut mi non est bibendum gravida vitae eget risus. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. "/>
        
        <Policy title='Disclosure of Information' content="Vivamus tincidunt malesuada felis, ut congue elit faucibus at. Nulla purus dui, tincidunt et velit id, pretium fringilla purus. Nam dignissim libero quam, vel scelerisque sapien hendrerit iaculis. Aliquam ac metus interdum, sollicitudin tellus ac, mattis urna. Nunc id molestie odio, vel sollicitudin ex. Aliquam et neque tincidunt, finibus ligula in, mattis sapien. Sed nec aliquam nulla, at consequat ipsum."/>
        
        <Policy title='Access to Account and Profiles' content="Vivamus tincidunt malesuada felis, ut congue elit faucibus at. Nulla purus dui, tincidunt et velit id, pretium fringilla purus. Nam dignissim libero quam, vel scelerisque sapien hendrerit iaculis. Aliquam ac metus interdum, sollicitudin tellus ac, mattis urna. Nunc id molestie odio, vel sollicitudin ex. Aliquam et neque tincidunt, finibus ligula in, mattis sapien. Sed nec aliquam nulla, at consequat ipsum."/>
    </div>
  )
}

export default PrivacyPolicy
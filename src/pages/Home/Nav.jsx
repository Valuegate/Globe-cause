import React from 'react'
import style from './styles.module.css'
 import logo from '../../assets/logo-siv.svg'
import {Link} from 'react-router-dom'
import {IoIosPerson} from 'react-icons/io'
import {useUserAuth}from '../../hooks/auth/UserAuthContext'

const Nav = () => {
    //   const items = JSON?.parse(localStorage?.getItem('user'));
      const {user} = useUserAuth();
      console.log(user)
  return (
    <div>
      <div className={style.NavContainer}>
        <div className={style.NavItems}>
          <div className={style.NavItem}>
            <Link  style={{textDecoration:'none',color:'#fff'}} targer='_blank'  to='https://sivolunteering.com/'>
                Home
            </Link>
            </div>
        {/* <div className={style.NavItem}>About</div> */}
        </div>
        
        <div className={style.NavItems}>
          <img src={logo} alt='' />
        </div>
        <div className={style.NavItems} >
          {/* <div className={style.NavItem}>Services</div> */}
            <div className={style.NavItems} >
                
                
                <Link  to='/account' style={{display:'flex',textDecoration:'none',alignItems:'center',justifyContent:'center'}} >
                <IoIosPerson className={style.Notification}/>&nbsp;<p className={style.Ptag}>Hello, {user?.email||'there'}</p>
                </Link>
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default Nav
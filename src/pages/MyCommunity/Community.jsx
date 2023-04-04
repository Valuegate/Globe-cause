import React, {useState} from 'react'

import styles from "./styles.module.css";

import Search from "../../components/elements/Search/Search";
import pic from '../../assets/Ellipse 236.png'

import {Link} from 'react-router-dom'
import arrow from '../../assets/Vectuor.png'
import ChatContainer from "../../components/containers/ChatContainer/ChatContainer";
import img from "../../assets/myPhoto.JPG";
import InputContainer from "../../components/containers/InputContainer/InputContainer";


const Community = () => {
  const [message, setMessage] = useState("");
  const [chatList, setChatList] = useState(['Hello Everyone']);
  return (
    <div>
      <div className={styles.Container}>
          <div className={styles.HeaderContainer} >
              <Link to='/account'>
              <img src={arrow} alt="" />
              </Link>
              <p >My Community</p>
              <img style={{width:'50px',height:'50px'}} src={pic} alt="" />
          </div>
          <div className={styles.CommunityHeader} >
              {/* <p style={{fontSize:'24px',fontWeight:'700'}} >My Community</p> */}
              {/* <img src={pic} alt="" /> */}
          </div>
          <Search />
          <div className={styles.AboutCity}>
         <div className={styles.Photos}>
          {chatList.map((message, i) => (
            <ChatContainer
              image={img}
              key={i + 1}
              username="Captain Michael"
              message={message}
            />
          ))}
          <div style={{ width: "100%" }}>
            <InputContainer
              setMessage={setMessage}
              setChatList={setChatList}
              chatList={chatList}
              message={message}
            />
          </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Community
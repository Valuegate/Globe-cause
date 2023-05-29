import React from "react";
import styles from "./styles.module.css";
// import {auth} from '../../../firebase'
// import {useAuthState} from 'react-firebase-hooks/auth'

// import InputContainer from "../InputContainer/InputContainer";

const ChatContainer = ({ message }) => {
  // const [user] = useAuthState(auth);
  return (
    <div className={styles.Box }>
      <div className={styles.ImageContainer}>
        <img src={message.profile_image||message.avatar} alt="" className={styles.Image} />
      </div>
      <div className={styles.MessageContainer}>
        <p className={styles.Username}>{message.name || 'No Name'} </p>
        <p className={styles.Message}>{message.text||message.comment}</p>
      </div>
    </div>
  );
};

export default ChatContainer;

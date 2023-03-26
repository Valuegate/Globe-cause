import React from "react";
import styles from "./styles.module.css";

import InputContainer from "../InputContainer/InputContainer";

const ChatContainer = ({ image, username, message }) => {
  return (
    <div className={styles.Box}>
      <div className={styles.ImageContainer}>
        <img src={image} alt="" className={styles.Image} />
      </div>
      <div className={styles.MessageContainer}>
        <p className={styles.Username}>{username} </p>
        <p className={styles.Message}>{message}</p>
      </div>
    </div>
  );
};

export default ChatContainer;

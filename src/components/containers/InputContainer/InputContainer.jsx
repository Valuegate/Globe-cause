import React, { useState } from "react";

import styles from "./styles.module.css";
import arrow from "../../../assets/Vector.png";

const InputContainer = ({ chatList, message, setChatList, setMessage }) => {
  const [chat, setChat] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    setChatList((chatList) => [...chatList, chat]);
  };

  const handleChange = (e) => {
    setChat(e.target.value);
  };

  return (
    <div className={styles.Container}>
      <input
        className={styles.Input}
        type="text"
        onChange={handleChange}
        value={chat}
        placeholder="Write public comment"
      />
      <button
        onClick={handleSubmit}
        autoFocus="autoFocus"
        className={styles.Button}
        type="submit"
      >
        <img src={arrow} alt="" />
      </button>
    </div>
  );
};

export default InputContainer;

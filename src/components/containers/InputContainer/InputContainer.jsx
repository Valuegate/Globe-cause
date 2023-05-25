import React, { useState } from "react";
import {auth,db} from '../../../firebase'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import styles from "./styles.module.css";
import arrow from "../../../assets/Vector.png";

const InputContainer = ({scroll}) => {
 
  const [chat, setChat] = useState("");

  

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (chat.trim() === ''){
    alert('Enter a valid message');
    return;
  }
  const {uid, displayName, photoURL} = auth.currentUser;
  await addDoc(collection(db, 'messages'), {
    text: chat,
    createdAt: serverTimestamp(),
    uid,
    name: displayName,
    avatar: photoURL
  })
  setChat('');
  scroll.current.scrollIntoView({behavior: 'smooth'});
    // setChatList((chatList) => [...chatList, chat]);
  };

  const handleChange = (e) => {
    setChat(e.target.value);
  };

  

  return (
    <form onSubmit={(e)=>handleSubmit(e)} className={styles.Container}>
      <input
        className={styles.Input}
        type="text"
        onChange={handleChange}
        value={chat}
        placeholder="Write public comment"
      />
      <button
        autoFocus="autoFocus"
        className={styles.Button}
        type="submit"
      >
        <img src={arrow} alt="" />
      </button>
    </form>
  );
};

export default InputContainer;

import React from 'react'

import styles from "./styles.module.css";
import arrow from '../../../assets/Vector.png'

const InputContainer = ({chatList, message,setChatList,setMessage}) => {
    

    const handleSubmit = (e) => {
        e.preventDefault();
         
        setChatList(chatList=>[...chatList,message])
        setMessage('');
    }

  return (
    <div className={styles.Container}>
        <input className={styles.Input} type='text' onChange={(e)=>setMessage(e.target.value)} value={message}  placeholder='Write public comment' />
        <button onClick={handleSubmit} className={styles.Button} type='submit'>
        <img src={arrow} alt='' />
        </button>
    </div>
  )
}

export default InputContainer
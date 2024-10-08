// import React, { useState } from "react";
// import {auth,db} from '../../../firebase'
// import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
// import styles from "./styles.module.css";
// import arrow from "../../../assets/Vector.png";
// import { useUserAuth } from "../../../hooks/auth/UserAuthContext";

// const InputContainer = ({scroll,filter,ids}) => {
 
//   const [chat, setChat] = useState("");

//   useUserAuth();

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     if (chat.trim() === ''){
//     alert('Enter a valid message');
//     return;
//   }
//   const {uid, displayName, photoURL} = auth.currentUser;
//   await addDoc(collection(db, `organisations_${filter.toLowerCase()}`,ids,'comments'), {
//     text: chat,
//     createdAt: serverTimestamp(),
//     uid,
//     name: displayName,
//     avatar: photoURL
//   })
//   setChat('');
//   scroll.current.scrollIntoView({behavior: 'smooth'});
//     // setChatList((chatList) => [...chatList, chat]);
//   };

//   const handleChange = (e) => {
//     setChat(e.target.value);
//   };

  

//   return (
//     <form onSubmit={(e)=>handleSubmit(e)} className={styles.Container}>
//       <input
//         className={styles.Input}
//         type="text"
//         onChange={handleChange}
//         value={chat}
//         placeholder="Write public comment"
//       />
//       <button
//         autoFocus="autoFocus"
//         className={styles.Button}
//         type="submit"
//       >
//         <img src={arrow} alt="" />
//       </button>
//     </form>
//   );
// };

// export default InputContainer;


import React, { useState } from "react";
import styles from "./styles.module.css";
import arrow from "../../../assets/Vector.png";
import { useUserAuth } from "../../../hooks/auth/UserAuthContext";

const InputContainer = ({ scroll, filter, ids, addComment }) => {
  const [chat, setChat] = useState("");
  const { user } = useUserAuth(); // Get user details from context

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (chat.trim() === "") {
      alert("Enter a valid message");
      return;
    }

    // Use user information for the comment
    const { uid, displayName, photoURL } = user;

    // Simulate adding a comment. You can replace this with your API call.
    addComment({
      text: chat,
      createdAt: new Date().toISOString(), // Use a timestamp
      uid,
      name: displayName,
      avatar: photoURL,
    });

    setChat("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e) => {
    setChat(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.Container}>
      <input
        className={styles.Input}
        type="text"
        onChange={handleChange}
        value={chat}
        placeholder="Write public comment"
      />
      <button autoFocus="autoFocus" className={styles.Button} type="submit">
        <img src={arrow} alt="" />
      </button>
    </form>
  );
};

export default InputContainer;

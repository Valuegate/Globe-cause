import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.css";

const Modal = ({ visible, toggle,content='lorem iposum', heading='Log in as' }) => visible ? ReactDOM.createPortal(
  <div className={styles.Modal}>
    <div className={styles.ModalPop} role="dialog" aria-modal="true">
      <h3>{heading}</h3>
      <p>{content}</p>
      <button type="button" onClick={toggle}>Close</button>
    </div>  
    <div className={styles.ModalOverlay}></div>    
  </div>, document.body
) : null;

export default Modal;
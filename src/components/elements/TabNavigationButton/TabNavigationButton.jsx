import React from "react";
import styles from "./styles.module.css";

const TabNavigationButton = ({ text, onClick, bg, color }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bg,
        color: color,
        border: 'none',
        borderRadius: '20px',
        padding: '10px 20px',
        cursor: 'pointer',
        margin: '0 5px'
      }}
      className={styles.TabNavigationButton}
    >
      {text}
    </button>
  );
};

export default TabNavigationButton;

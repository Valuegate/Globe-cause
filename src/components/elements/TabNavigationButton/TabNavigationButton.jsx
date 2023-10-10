import React from "react";
import styles from "./styles.module.css";

const TabNavigationButton = ({ text, onClick, bg, color }) => {
  return (
    <div
      className={styles.TabNavigationButton}
      style={{ backgroundColor: bg, color: color }}
      onClick={() => onClick(text)}
    >
      <p>{text}</p>
    </div>
  );
};

export default TabNavigationButton;

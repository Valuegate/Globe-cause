import React from "react";
import styles from "./styles.module.css";

const SocialAuthButton = ({ text, icon, onclick, bg, color }) => {
  return (
    <div
      className={styles.SocialAuthButton}
      onClick={onclick}
      style={{ backgroundColor: bg, color: color }}
    >
      <div className={styles.Icon}>{icon}</div>
      <p>{text}</p>
    </div>
  );
};

export default SocialAuthButton;

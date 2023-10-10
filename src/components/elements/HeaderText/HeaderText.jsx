import React from "react";
import styles from "./styles.module.css";

const HeaderText = ({ text }) => {
  return <h1 className={styles.HeaderText}>{text}</h1>;
};
export default HeaderText;

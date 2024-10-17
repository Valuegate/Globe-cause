import React from "react";
import logo from "../../../assets/globe_cause_bg-removebg-preview.png";
import styles from "./styles.module.css";

const Logo = () => {
  return (
    <div className={styles.Logo}>
      <img src={logo} alt="logo" />
      {/* <h3>
       GLOBE CAUSE
      </h3> */}
    </div>
  );
};

export default Logo;

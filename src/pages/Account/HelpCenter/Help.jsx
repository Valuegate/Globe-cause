import React from "react";

import styles from "./styles.module.css";
import BackButton from "../../../components/elements/BackButton/BackButton";
import InputLabel from "../../../components/elements/InputLabel/InputLabel";

import AuthenticationButton from "../../../components/elements/AuthenticationButton/AuthenticationButton";


const Help = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.HeaderContainer}>
        <BackButton color="#fff" to="/account" />
        <p style={{ fontWeight: "700", textAlign: "center", fontSize: "20px" }}>
          Help Center
        </p>
      </div>
      <p style={{ color: "#1f4490" }}>Contact us</p>
      {/* <HelpContainer social={ph} tel="" content="Phone" />
      <HelpContainer social={what} content="Whatsapp" />
      <HelpContainer
        social={fb}
        href="https://www.facebook.com/FormativeFootprint"
        content="Facebook"
      />
      <HelpContainer
        social={tweet}
        href="https://www.twitter.com/FormativeFootprint"
        content="Twitter"
      /> */}
      <InputLabel label="Subject" placeholder={"Subject"} />
      <InputLabel label="Message" placeholder={"Message"} />
      <AuthenticationButton text="Send Feedback" />
    </div>
  );
};

export default Help;

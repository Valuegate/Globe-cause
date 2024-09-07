import React from "react";
import styles from "./styles.module.css";
import logo from "../../../assets/globe_cause_logo.png";

import { useContext } from "react";
import { WebsiteThemeContext } from "../../../hooks/theme/WebsiteThemeContext";

const Intro = () => {
  useContext(WebsiteThemeContext);
  return (
    <div
      className={styles.Intro}
      // style={
      //   theme === "dark" || theme === "default"
      //     ? { color: "#fff" }
      //     : { color: "rgb(25, 32, 43)" }
      // }
    >
      <div className={styles.IntroText}>
        <div className={styles.div}>
          <img src={logo} alt="" />
          <h3>
          Empowering Communities
            <br />
            Through Volunteering
          </h3>
        </div>

        <p>
          Join a vibrant community of volunteers making a difference across Nigeria. Whether you're in Lagos, Abuja, or any corner of the country, your impact matters. Together, we can uplift communities and drive positive change, one volunteer at a time.
        </p>
      </div>
    </div>
  );
};

export default Intro;

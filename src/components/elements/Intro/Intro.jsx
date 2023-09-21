import styles from "./styles.module.css";
import logo from "../../../assets/logo-siv.svg";

import { useContext } from "react";
import { WebsiteThemeContext } from "../../../hooks/theme/WebsiteThemeContext";

const Intro = () => {
  const { theme } = useContext(WebsiteThemeContext);
  return (
    <div
      className={styles.Intro}
      style={
        theme === "dark" || theme === "default"
          ? { color: "#fff" }
          : { color: "rgb(25, 32, 43)" }
      }
    >
      <div className={styles.IntroText}>
        <div className={styles.div}>
          <img src={logo} alt="" />
          <h3>
            Safe & informed
            <br />
            volunteering
          </h3>
        </div>

        <p>
          Join a global community of volunteers living and traveling around the
          world
        </p>
      </div>
    </div>
  );
};

export default Intro;

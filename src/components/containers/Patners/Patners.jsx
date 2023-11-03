import React from "react";
import styles from "./styles.module.css";
import pat1 from "../../../assets/Deses.jpg";
import pat2 from "../../../assets/Fajub.jpg";
import pat3 from "../../../assets/Footprint.jpg";
import pat4 from "../../../assets/4Team.jpg";
import { useTranslation } from "react-i18next";

import { useContext } from "react";
import { WebsiteThemeContext } from "../../../hooks/theme/WebsiteThemeContext";

const images = [pat1, pat2, pat3, pat4];

const Patners = () => {
  const { theme } = useContext(WebsiteThemeContext);
  const { t } = useTranslation();
  return (
    <div>
      <p
        className={styles.Heading}
        style={
          theme === "dark" || theme === "default"
            ? { color: "#fff" }
            : { color: "rgb(25, 32, 43)" }
        }
      >
        {t("Example.1")}
      </p>
      <div className={styles.FlexContainer}>
        {images.map((img, i) => {
          return <img src={img} key={i} alt="" />
        })}
      </div>
    </div>
  );
};

export default Patners;

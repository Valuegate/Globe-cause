import React from "react";
import styles from "./styles.module.css";
import pat1 from "../../../assets/Dese.png";
import pat2 from "../../../assets/faju.png";
import pat3 from "../../../assets/formative footprint.png";
import pat4 from "../../../assets/4team.png";
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

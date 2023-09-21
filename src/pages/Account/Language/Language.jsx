import React from "react";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import BackButton from "../../../components/elements/BackButton/BackButton";

import { useContext } from "react";
import { WebsiteThemeContext } from "../../../hooks/theme/WebsiteThemeContext";

const Language = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useContext(WebsiteThemeContext);

  const language = [
    {
      langu: "English (US)",
      abb: "en",
    },
    {
      langu: "English (UK)",
      abb: "en (uk)",
    },
    {
      langu: "Portugese",
      abb: "pg",
    },
    {
      langu: "Spanish",
      abb: "sp",
    },
    {
      langu: "Romanian",
      abb: "rm",
    },
    {
      langu: "Mandarin",
      abb: "mn",
    },
    {
      langu: "Hindi",
      abb: "hindi",
    },

    {
      langu: "Arabic",
      abb: "ab",
    },
    {
      langu: "Indonesia",
      abb: "id",
    },
    {
      langu: "Germany",
      abb: "gm",
    },

    {
      langu: "Korean",
      abb: "kr",
    },
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    i18n.changeLanguage(value);
    console.log(value);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.HeaderContainer}>
        <BackButton color="#fff" to="/account" />
        <p
          style={
            theme === "dark" || theme === "default"
              ? {
                  color: "#fff",
                  fontWeight: "700",
                  fontSize: "20px",
                  textAlign: "center",
                }
              : {
                  color: "rgb(25, 32, 43)",
                  fontWeight: "700",
                  fontSize: "20px",
                  textAlign: "center",
                }
          }
        >
          {t("Example.3")}{" "}
        </p>
      </div>
      <div
        styles={{ padding: "2rem" }}
        style={
          theme === "dark" || theme === "default"
            ? {
                color: "#fff",
              }
            : {
                color: "rgb(25, 32, 43)",
              }
        }
      >
        <p style={{ fontSize: "18px", fontWeight: "600" }}>Suggested</p>
        <form className={styles.Form} action="">
          {language.map((val, i) => {
            return (
              <div className={styles.Label} key={i}>
                <label htmlFor="html">{val.langu}</label>
                <input
                  onChange={handleChange}
                  value={val.abb}
                  type="radio"
                  id="html"
                  name="fav_language"
                />
              </div>
            );
          })}
        </form>
      </div>
    </div>
  );
};

export default Language;

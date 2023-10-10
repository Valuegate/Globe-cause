import React from "react";
import styles from "./styles.module.css";
import NotificationSetting from "../../../components/elements/NotificationSetting/NotificationSetting";
import BackButton from "../../../components/elements/BackButton/BackButton";
import AuthenticationButton from "../../../components/elements/AuthenticationButton/AuthenticationButton";

import { useContext } from "react";
import { WebsiteThemeContext } from "../../../hooks/theme/WebsiteThemeContext";

const Notification = () => {
  const { theme } = useContext(WebsiteThemeContext);
  return (
    <div className={styles.Notification}>
      <h3
        className={styles.PageHeader}
        style={
          theme === "dark" || theme === "default"
            ? { color: "#fff" }
            : { color: "rgb(25, 32, 43)" }
        }
      >
        Notification Settings
      </h3>
      <div
        className={styles.NotificationContainer}
        style={
          theme === "dark" || theme === "default"
            ? {}
            : { boxShadow: "0 0 3px 0 rgba(0,0,0,0.5)" }
        }
      >
        <NotificationSetting text="General Information" />
        <NotificationSetting text="Sound" />
        <NotificationSetting text="Vibrate" />
      </div>
      <AuthenticationButton text="Save" />
      <BackButton color="#0E0E0F" to="/account" />
    </div>
  );
};

export default Notification;

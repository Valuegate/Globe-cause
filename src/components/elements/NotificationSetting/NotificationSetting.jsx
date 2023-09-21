import styles from "./styles.module.css";

import { useContext } from "react";
import { WebsiteThemeContext } from "../../../hooks/theme/WebsiteThemeContext";

const NotificationSetting = ({ text }) => {
  const { theme } = useContext(WebsiteThemeContext);
  return (
    <div className={styles.NotificationSetting}>
      <p
        style={
          theme === "dark" || theme === "default"
            ? { color: "#fff" }
            : { color: "rgb(25, 32, 43)" }
        }
      >
        {text}
      </p>
      <div className={styles.Switch}>
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default NotificationSetting;

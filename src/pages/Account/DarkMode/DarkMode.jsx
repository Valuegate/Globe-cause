import BackButton from "../../../components/elements/BackButton/BackButton";
import styles from "./styles.module.css";

import { useContext } from "react";
import { WebsiteThemeContext } from "../../../hooks/theme/WebsiteThemeContext";

const DarkMode = () => {
  const { theme, setTheme } = useContext(WebsiteThemeContext);

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    //save theme to local storage

    if (e.target.value === "dark") {
      localStorage.setItem("theme", "dark");
    }
    if (e.target.value === "light") {
      localStorage.setItem("theme", "light");
    }
    if (e.target.value === "default") {
      localStorage.setItem("theme", "default");
    }
  };

  return (
    <div
      className={styles.DarkMode}
      style={
        theme === "dark" || theme === "default"
          ? { color: "#fff" }
          : { color: "rgb(25, 32, 43)" }
      }
    >
      <h1>Website Theme</h1>
      <p>Choose your preferred theme</p>
      <select
        type="select"
        name="theme"
        id="theme"
        value={theme}
        onChange={handleThemeChange}
        style={
          theme === "dark" || theme === "default"
            ? {
                width: "100%",
                maxWidth: "300px",
                height: "50px",
                borderRadius: "10px",
                border: "none",
                outline: "none",
                padding: "0 10px",
                fontSize: "1.2rem",
                marginBottom: "20px",
              }
            : {
                border: "1px solid rgb(25, 32, 43)",
                width: "100%",
                maxWidth: "300px",
                height: "50px",
                borderRadius: "10px",
                outline: "none",
                padding: "0 10px",
                fontSize: "1.2rem",
                marginBottom: "20px",
              }
        }
      >
        <option value="default">Default</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <BackButton color="white" />
    </div>
  );
};

export default DarkMode;

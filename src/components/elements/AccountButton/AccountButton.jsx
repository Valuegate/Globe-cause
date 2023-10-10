import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useContext } from "react";
import { WebsiteThemeContext } from "../../../hooks/theme/WebsiteThemeContext";

const AccountButton = ({ text, to, children }) => {
  const { theme } = useContext(WebsiteThemeContext);
  return (
    <Link
      className={styles.AccountButton}
      style={
        theme === "dark" || theme === "default"
          ? { color: "#fff", textDecoration: "none" }
          : { color: "rgb(25, 32, 43)", textDecoration: "none" }
      }
      to={to}
    >
      <div className={styles.NameContainer}>
        {children}
        <p>{text}</p>
      </div>
      <div className={styles.IconContainer}>
        <ArrowForwardIosIcon />
      </div>
    </Link>
  );
};

export default AccountButton;

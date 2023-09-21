import styles from "./styles.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { WebsiteThemeContext } from "../../../hooks/theme/WebsiteThemeContext";

const BackButton = ({ color, to }) => {
  const { theme } = useContext(WebsiteThemeContext);

  return (
    <Link
      to={to}
      style={
        theme === "default" || theme === "dark"
          ? { textDecoration: "none", color: color }
          : {
              textDecoration: "none",
              color: "rgb(25, 32, 43)",
            }
      }
      onClick={() => window.history.back()}
    >
      <div className={styles.BackButton}>
        <ArrowBackIosIcon />
      </div>
    </Link>
  );
};

export default BackButton;

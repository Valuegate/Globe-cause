import styles from "./styles.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";

const BackButton = ({ color, to }) => {
  return (
    <Link to={to} style={{ textDecoration: "none", color: color }}>
      <div className={styles.BackButton}>
        <ArrowBackIosIcon />
      </div>
    </Link>
  );
};

export default BackButton;

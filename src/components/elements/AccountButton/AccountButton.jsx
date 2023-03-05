import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const AccountButton = ({ text, to, children }) => {
  return (
    <Link
      className={styles.AccountButton}
      style={{ textDecoration: "none", color: "#0E0E0F" }}
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

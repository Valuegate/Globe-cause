import styles from "./styles.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BackButton = ({ color, to }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Link
      to={to}
      style={{ textDecoration: "none", color: color }}
      onClick={goBack}
    >
      <div className={styles.BackButton}>
        <ArrowBackIosIcon />
      </div>
    </Link>
  );
};

export default BackButton;

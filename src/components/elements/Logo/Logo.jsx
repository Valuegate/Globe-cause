import logo from "../../../assets/logo-siv.svg";
import styles from "./styles.module.css";

const Logo = () => {
  return (
    <div className={styles.Logo}>
      <img src={logo} alt="logo" />
      <h3>
        SAFE & INFORMED
        <br />
        VOLUNTEERING
      </h3>
    </div>
  );
};

export default Logo;

import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import BottomNavigationText from "../../elements/BottomNavigationText/BottomNavigationText";

const BottomNavigation = ({ navigationState }) => {
  if (navigationState) {
    return (
      <div className={[styles.BottomNavigation]}>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <BottomNavigationText text="Home" />
        </Link>
        <Link to="/organizations" style={{ textDecoration: "none" }}>
          <BottomNavigationText text="Organizations" />
        </Link>
        <Link to="/account" style={{ textDecoration: "none" }}>
          <BottomNavigationText text="Account" />
        </Link>
      </div>
    );
  } else {
    return <div className={styles.BottomNavigationHide}></div>;
  }
};

export default BottomNavigation;

import styles from "./styles.module.css";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavigationButton = ({ onClick, navigationState }) => {
  if (navigationState) {
    return (
      <div className={styles.NavigationButton} onClick={onClick}>
        <CloseIcon />
      </div>
    );
  }

  return (
    <div className={styles.NavigationButton} onClick={onClick}>
      <MenuIcon />
    </div>
  );
};

export default NavigationButton;

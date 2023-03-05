// import NotificationsIcon from "@mui/icons-material/Notifications";
import staff from "../../../assets/staff.png";

import styles from "./styles.module.css";

const Intro = () => {
  return (
    <div className={styles.Intro}>
      <div className={styles.IntroText}>
        <h3>
          Safe & informed
          <br />
          volunteering
        </h3>
        <p>
          Join a global community of volunteers living and traveling around the
          world
        </p>
      </div>
      <div className={styles.IntroImage}>
        <img src={staff} alt="IntroImage" />
      </div>
      {/* <div className={styles.Notification}>
        <NotificationsIcon fontSize="large" />
      </div> */}
    </div>
  );
};

export default Intro;

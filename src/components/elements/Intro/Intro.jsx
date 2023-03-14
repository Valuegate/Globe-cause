// import NotificationsIcon from "@mui/icons-material/Notifications";
import staff from "../../../assets/staff.png";
import notification from '../../../assets/notification.png'
import styles from "./styles.module.css";
import {Link} from 'react-router-dom'

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
      <div className={styles.Notification} >
        <Link to='/notifications'>
        <img src={notification} alt=''/>
        </Link>
      </div>
      {/* <div className={styles.Notification}>
        <NotificationsIcon fontSize="large" />
      </div> */}
    </div>
  );
};

export default Intro;

// import NotificationsIcon from "@mui/icons-material/Notifications";
import staff from "../../../assets/staff.png";
import notification from '../../../assets/notification.png'
import styles from "./styles.module.css";
import {Link} from 'react-router-dom'
import {IoIosPerson} from 'react-icons/io'
import logo from '../../../assets/logo-siv.svg'

const Intro = () => {
  // const items = JSON.parse(localStorage.getItem('user'));
  return (
    <div className={styles.Intro}>
      <div className={styles.IntroText}>
        <div className={styles.div} >
          <img src={logo} alt='' />
          <h3>          
            Safe & informed
            <br />
            volunteering
          </h3>
        </div>
        
        <p>
          Join a global community of volunteers living and traveling around the
          world
        </p>
      </div>
      {/* <div className={styles.IntroImage}>
        <img src={staff} alt="IntroImage" />
      </div> */}
      <div  >
        {/* <Link to='/account'>
        {items?.name}&nbsp;<IoIosPerson className={styles.Notification}/>
        </Link> */}
        
      </div>
      {/* <div className={styles.Notification}>
        <NotificationsIcon fontSize="large" />
      </div> */}
    </div>
  );
};

export default Intro;

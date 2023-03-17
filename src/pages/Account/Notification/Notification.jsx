import styles from "./styles.module.css";
import NotificationSetting from "../../../components/elements/NotificationSetting/NotificationSetting";
import BackButton from "../../../components/elements/BackButton/BackButton";
import AuthenticationButton from "../../../components/elements/AuthenticationButton/AuthenticationButton";

const Notification = () => {
  return (
    <div className={styles.Notification}>
      <h3 className={styles.PageHeader}>Notification Settings</h3>
      <div className={styles.NotificationContainer}>
        <NotificationSetting text="General Information" />
        <NotificationSetting text="Sound" />
        <NotificationSetting text="Vibrate" />
      </div>
      <AuthenticationButton text="Save" />
      <BackButton color="#0E0E0F" to="/account" />
    </div>
  );
};

export default Notification;

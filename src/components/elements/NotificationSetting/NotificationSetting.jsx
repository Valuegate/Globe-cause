import styles from "./styles.module.css";

const NotificationSetting = ({ text }) => {
  return (
    <div className={styles.NotificationSetting}>
      <p>{text}</p>
      <div className={styles.Switch}>
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default NotificationSetting;

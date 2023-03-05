import styles from "./styles.module.css";
import InputLabel from "../../../components/elements/InputLabel/InputLabel";
import BackButton from "../../../components/elements/BackButton/BackButton";
import AuthenticationButton from "../../../components/elements/AuthenticationButton/AuthenticationButton";

const ChangePassword = () => {
  return (
    <div className={styles.ChangePassword}>
      <h3 className={styles.PageHeader}>Change Password</h3>
      <div className={styles.Form}>
        <InputLabel
          label="Current Password"
          type="password"
          placeholder="Current Password"
        />
        <InputLabel
          label="New Password"
          type="password"
          placeholder="New Password"
        />
        <InputLabel
          label="Confirm New Password"
          type="password"
          placeholder="Confirm New Password"
        />
      </div>
      <AuthenticationButton text="update" />
      <BackButton color="#0E0E0F" to="/account" />
    </div>
  );
};

export default ChangePassword;

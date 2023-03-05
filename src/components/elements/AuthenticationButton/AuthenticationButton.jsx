import styles from "./styles.module.css";

const AuthenticationButton = ({ text, icon, onclick, bg, color }) => {
  return (
    <div
      className={styles.AuthenticationButton}
      onClick={onclick}
      style={{ backgroundColor: bg, color: color }}
    >
      <p>{text}</p>
      <div className={styles.Icon}>{icon}</div>
    </div>
  );
}

export default AuthenticationButton;
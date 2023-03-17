import styles from "./styles.module.css";

const AuthenticationButton = ({ text, icon, onclick, bg, color, submit }) => {
  return (
    <button
      className={styles.AuthenticationButton}
      onClick={onclick}
      style={{ backgroundColor: bg, color: color, border: "none" }}
      type={submit}
    >
      <p>{text}</p>
      <div className={styles.Icon}>{icon}</div>
    </button>
  );
};

export default AuthenticationButton;

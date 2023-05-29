import styles from "./styles.module.css";

const EmailVerified = () => {
  const loginRedirect = () => {
    window.location.href = "/login";
  };

  return (
    <div className={styles.EmailVerified}>
      <h1>Email Verified</h1>
      <p>Your email has been verified</p>
      <button className={styles.VerifiedButton} onClick={loginRedirect}>
        Login
      </button>
    </div>
  );
};

export default EmailVerified;

import styles from "./styles.module.css";
import { useUserAuth } from "../../../hooks/auth/UserAuthContext";

const EmailVerification = () => {
  const { verificationEmail } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await verificationEmail();
      console.log("Email sent");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className={styles.EmailVerification}>
      <h1>Email Verification</h1>
      <p>Check your email for a verification link</p>
      <button onClick={handleSubmit} className={styles.VerificationButton}>
        Resend Verification Email
      </button>
    </div>
  );
};

export default EmailVerification;

import styles from "./styles.module.css";
import { useUserAuth } from "../../../hooks/auth/UserAuthContext";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase";

const EmailVerification = () => {
  const { verificationEmail, logOut } = useUserAuth();
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await verificationEmail();
      setDisabled(true);
      console.log("Email sent");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const checkEmailVerification = async () => {
      const user = auth.currentUser;
      if (user) {
        await user.reload(); // Refresh user data
        if (user.emailVerified) {
          navigate("/"); // Redirect to a verification page
        }
      }
    };
    checkEmailVerification();
  }, [navigate]);

  useEffect(() => {
    setTimeout(() => {
      setDisabled(false);
    }, 30000);
  }, []);

  return (
    <div className={styles.EmailVerification}>
      <h1>Email Verification</h1>
      <p>Check your email for a verification link</p>
      <button
        onClick={handleSubmit}
        disabled={disabled}
        className={styles.VerificationButton}
      >
        Resend Verification Email
      </button>
      <button onClick={handleLogout} className={styles.VerificationButton}>
        Logout
      </button>
    </div>
  );
};

export default EmailVerification;

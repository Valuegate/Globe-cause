import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { auth } from "../../../firebase";

const EmailVerified = () => {
  const navigate = useNavigate();
  // const loginRedirect = () => {
  //   navigate("/");
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     loginRedirect();
  //   }, 500);
  // }, []);

  useEffect(() => {
    const checkEmailVerification = async () => {
      const user = auth.currentUser;
      if (user) {
        await user.reload(); // Refresh user data
        if (!user.emailVerified) {
          navigate("/verify-email"); // Redirect to a verification page
        } else {
          navigate("/");
        }
      }
    };
    setTimeout(() => {
      checkEmailVerification();
    }, 1000);
  }, [navigate]);

  return (
    <div className={styles.EmailVerified}>
      <h1>Email Verified</h1>
      <p>Your email has been verified</p>
      <p>You will be redirected to the homepage</p>
    </div>
  );
};

export default EmailVerified;

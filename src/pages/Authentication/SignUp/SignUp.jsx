import styles from "./styles.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../hooks/auth/UserAuthContext";

import HeaderText from "../../../components/elements/HeaderText/HeaderText";
import SocialAuthButton from "../../../components/elements/SocialAuthButton/SocialAuthButton";
import InputLabel from "../../../components/elements/InputLabel/InputLabel";
import Label from "../../../components/elements/Label/Label";
import AuthenticationButton from "../../../components/elements/AuthenticationButton/AuthenticationButton";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
      console.log(email);
      console.log(err.message);
    }
  };

  return (
    <div className={styles.SignUp}>
      <HeaderText text="Sign Up" />
      <SocialAuthButton
        text="CONTINUE WITH FACEBOOK"
        bg="#1F4490"
        color="#ffffff"
      />
      <SocialAuthButton text="CONTINUE WITH APPLE" bg="#0E0E0F" color="#ffff" />
      <SocialAuthButton
        text="CONTINUE WITH GOOGLE"
        bg="#FFFFFF"
        color="#0E0E0F"
      />
      <form className={styles.SignUp} onSubmit={handleSubmit}>
        <div className={styles.Inputs}>
          <InputLabel
            label="Name"
            type="text"
            placeholder="Enter your fullname"
          />
          <InputLabel
            label="Email"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputLabel
            label="Password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputLabel
            label="Phone Number"
            type="number"
            placeholder="Enter your phone number"
          />
        </div>
        <Label text="Forgot password?" />
        <AuthenticationButton text="Sign up" />
      </form>
      <div className={styles.SignupLabel}>
        <Label text="Already have an account?" />
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Label text="Login" color="#1F4490" />
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

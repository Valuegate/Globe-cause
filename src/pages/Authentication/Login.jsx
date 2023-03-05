import { Link } from "react-router-dom";

import styles from "./styles.module.css";

import HeaderText from "../../components/elements/HeaderText/HeaderText";
import SocialAuthButton from "../../components/elements/SocialAuthButton/SocialAuthButton";
import InputLabel from "../../components/elements/InputLabel/InputLabel";
import Label from "../../components/elements/Label/Label";
import AuthenticationButton from "../../components/elements/AuthenticationButton/AuthenticationButton";

const Login = () => {
  return (
    <div className={styles.Login}>
      <HeaderText text="Login" />
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
      <div className={styles.Inputs}>
        <InputLabel label="Email" type="email" placeholder="Enter your email" />
        <InputLabel
          label="Password"
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <Label text="Forgot password?" />
      <AuthenticationButton text="Login" />
      <div className={styles.SignupLabel}>
        <Label text="Don't have an account?" />
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Label text="Sign up" color="#1F4490" />
        </Link>
      </div>
    </div>
  );
};

export default Login;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../hooks/auth/UserAuthContext";

import styles from "./styles.module.css";

import HeaderText from "../../components/elements/HeaderText/HeaderText";
import SocialAuthButton from "../../components/elements/SocialAuthButton/SocialAuthButton";
import InputLabel from "../../components/elements/InputLabel/InputLabel";
import Label from "../../components/elements/Label/Label";
import AuthenticationButton from "../../components/elements/AuthenticationButton/AuthenticationButton";

import ErrorPopup from "../../components/containers/ErrorPopup/ErrorPopup";

const Login = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");

  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    setError("");
    try {
      await logIn(email, password);
      setLoading(false)
      navigate("/home");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return (
    <div className={styles.Login}>
      {loading ? <ErrorPopup message='success' color='green' /> : null }
      
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
      <form className={styles.Login} onSubmit={handleSubmit}>
        <div className={styles.Inputs}>
          <InputLabel
            label="Email"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputLabel
            label="Password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Label text="Forgot password?" />
        <AuthenticationButton text="Login" submit={"submit"} />
      </form>
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

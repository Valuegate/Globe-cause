import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../hooks/auth/UserAuthContext"; // Keep if needed
import styles from "./styles.module.css";

// import { UserAthorizationContext } from "../../hooks/authorization/UserAuthorizationContext";

import { FiEye, FiEyeOff } from "react-icons/fi";

import HeaderText from "../../components/elements/HeaderText/HeaderText";
import InputLabel from "../../components/elements/InputLabel/InputLabel";
import Label from "../../components/elements/Label/Label";
import AuthenticationButton from "../../components/elements/AuthenticationButton/AuthenticationButton";
import VidBg from "../../assets/video/bgvideo.mp4";

const Login = () => {
  const [username, setUsername] = useState(""); // Change to username
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  // const { role } = useContext(UserAthorizationContext);
  const navigate = useNavigate();
  const { logIn, success, loading } = useUserAuth();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    logIn(username, password)
  };

  useEffect (() => {
    if (!loading && success) {
      alert('Login successful');
      navigate("/home");
    }
  }, [success, navigate, loading])

  // useEffect(() => {
  //   if (role) {
  //     navigate("/home");
  //   }
  // }, [role, navigate]);

  return (
    <div className={styles.VideoContainer}>
      <video autoPlay loop muted className={styles.VideoBackground}>
        <source src={VidBg} type="video/mp4" />
      </video>
      <div className={styles.ColorOverlay}></div>
      <div className={styles.Login}>
        <div className={styles.LoginOpt}>
          <HeaderText text="Login" />
          <div className={styles.SignupLabel}>
            <Label text="Don't have an account?" color={"#1F1246"} />
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <p className={styles.P}>Sign Up</p>
            </Link>
          </div>
        </div>

        <form className={styles.Login} onSubmit={handleSubmit}>
          <div className={styles.Inputs}>
            <InputLabel
              label="Email"
              type="text"
              placeholder="Enter your Email"
              onChange={(e) => setUsername(e.target.value)}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <InputLabel
                label="Password"
                type={passwordType}
                placeholder="Enter your password"
                onChange={handlePasswordChange}
                style={{ border: "none", background: "none" }}
              />
              <div
                onClick={togglePassword}
                className={styles.PasswordToggleContainer}
              >
                {passwordType === "password" ? <FiEyeOff /> : <FiEye />}
              </div>
            </div>
          </div>
          <Link to="/forgot-password">
            <Label color="#BF2B47" text="Forgot password?" />
          </Link>
          <AuthenticationButton
            text="Login"
            submit="submit"
            onclick={handleSubmit}
          />
        </form>

        <p style={{ color: "red" }}>{error}</p>
      </div>
    </div>
  );
};

export default Login; 
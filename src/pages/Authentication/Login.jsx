import React, { useCallback, useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../hooks/auth/UserAuthContext";
import { setDoc, doc } from "firebase/firestore";
import styles from "./styles.module.css";

import { UserAthorizationContext } from "../../hooks/authorization/UserAuthorizationContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

import { FiEye, FiEyeOff } from "react-icons/fi";

import { signInWithGoogle, signInWithApple, db } from "../../firebase";

import HeaderText from "../../components/elements/HeaderText/HeaderText";
import SocialAuthButton from "../../components/elements/SocialAuthButton/SocialAuthButton";
import InputLabel from "../../components/elements/InputLabel/InputLabel";
import Label from "../../components/elements/Label/Label";
import AuthenticationButton from "../../components/elements/AuthenticationButton/AuthenticationButton";
import VidBg from "../../assets/video/bgvideo.mp4";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const [user, loading] = useAuthState(auth);
  const { role } = useContext(UserAthorizationContext);

  const navigate = useNavigate();
  const { logIn } = useUserAuth();

  const handlePasswordChange = (evnt) => {
    setPassword(evnt.target.value);
  };

  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const createProfile = useCallback(async (id) => {
    if (user) {
      await setDoc(doc(db, "volunteers", id), {
        country: "",
        date_created: new Date(),
        email_address: user.email || "",
        name: user.displayName || "",
        phone_number: user.phoneNumber || "",
        profile_image_url: "",
      })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    }
  }, [user]);

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithGoogle();
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      localStorage.setItem("user", JSON.stringify(email)); // Or some other value
      setTimeout(() => alert('Success'), 1000);
      navigate("/home");
    } catch (err) {
      setError("Invalid email or password");
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (user) {
      if (role === "") {
        createProfile(user.uid);
      }
      navigate("/home");
    }
  }, [user, role, createProfile, navigate]);

  return (
    <div className={styles.VideoContainer}>
      <video autoPlay loop muted className={styles.VideoBackground}>
        <source src={VidBg} type="video/mp4" />
      </video>
      <div className={styles.ColorOverlay}></div>
      <div className={styles.Login}>
        <HeaderText text="Login" />
        <div className={styles.LoginOption}>
          <SocialAuthButton
            text="CONTINUE WITH APPLE"
            bg="#BF2B47"
            color="#FCFCFC"
            onclick={signInWithApple}
          />
          <SocialAuthButton
            onclick={handleGoogleLogin}
            text="CONTINUE WITH GOOGLE"
            bg="#1F1246"
            color="#FCFCFC"
          />
        </div>
        <form className={styles.Login}>
          <div className={styles.Inputs}>
            <InputLabel
              label="Email"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
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
          <Link to='/forgot-password'>
            <Label color='#BF2B47' text="Forgot password?" />
          </Link>
          <AuthenticationButton
            text={loading ? "Login" : "Login"}
            submit="submit"
            onclick={handleSubmit}
          />
        </form>
        <p style={{ color: "red" }}> {error}</p>
        <div className={styles.SignupLabel}>
          <Label text="Don't have an account?" color={"##1F1246"} />
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <p className={styles.P}>Sign Up</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

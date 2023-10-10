import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../hooks/auth/UserAuthContext";
import { setDoc, doc } from "firebase/firestore";
import styles from "./styles.module.css";

import { UserAthorizationContext } from "../../hooks/authorization/UserAuthorizationContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

import { FiEye, FiEyeOff } from "react-icons/fi";

import {
  signInWithGoogle,
  signInWithFacebook,
  signInWithApple,
  db,
} from "../../firebase";

import HeaderText from "../../components/elements/HeaderText/HeaderText";
import SocialAuthButton from "../../components/elements/SocialAuthButton/SocialAuthButton";
import InputLabel from "../../components/elements/InputLabel/InputLabel";
import Label from "../../components/elements/Label/Label";
import AuthenticationButton from "../../components/elements/AuthenticationButton/AuthenticationButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const [load, setLoading] = useState(true);

  // const { user } = useUserAuth();

  const [user, loading] = useAuthState(auth);

  const { role } = useContext(UserAthorizationContext);

  const [passwordType, setPasswordType] = useState("password");

  const handlePasswordChange = (evnt) => {
    setPassword(evnt.target.value);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const createProfile = async (id) => {
    await setDoc(doc(db, "volunteers", id), {
      country: "",
      date_created: new Date(),
      email_address: user.email,
      name: user.displayName,
      phone_number: user.phoneNumber,
      profile_image_url: "",
    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithGoogle();
      navigate("/home");
      await console.log("user", user);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    setError("");
    try {
      await logIn(email, password);
      // setLoading(false);
      localStorage.setItem("user", JSON.stringify(user.displayName));
      setTimeout(() => {
           alert('success');
        }, 1000);
      navigate("/home");
    } catch (err) {
      setError("Invalid email or password");
      // setLoading(false);
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
  }, [role, user]);

  return (
    <div className={styles.Login}>
      <HeaderText text="Login" />
      {/* <SocialAuthButton
        text="CONTINUE WITH FACEBOOK"
        bg="#1F4490"
        color="#ffffff"
        onclick={signInWithFacebook}
      /> */}
      <SocialAuthButton
        text="CONTINUE WITH APPLE"
        bg="#0E0E0F"
        color="#ffff"
        onclick={signInWithApple}
      />
      <SocialAuthButton
        onclick={signInWithGoogle}
        text="CONTINUE WITH GOOGLE"
        bg="#FFFFFF"
        color="#0E0E0F"
        onClick={handleGoogleLogin}
      />
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
        <Label color='#fff' text="Forgot password?" />
        </Link>
        <AuthenticationButton
          text={loading ? "Login" : "Login"}
          submit={"submit"}
          onclick={handleSubmit}
        />
      </form>
      <p style={{ color: "red" }}> {error}</p>
      <div className={styles.SignupLabel}>
        <Label text="Don't have an account?" color={"#fff"} />
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Label text="Sign up" color="#1F4490" />
        </Link>
      </div>
    </div>
  );
};

export default Login;

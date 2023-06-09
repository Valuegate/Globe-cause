import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../hooks/auth/UserAuthContext";
import { setDoc, doc } from "firebase/firestore";
import styles from "./styles.module.css";

import { UserAthorizationContext } from "../../hooks/authorization/UserAuthorizationContext";

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

import { flexbox } from "@mui/system";

import ErrorPopup from "../../components/containers/ErrorPopup/ErrorPopup";

const Login = () => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setName] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const { user } = useUserAuth();

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
      setLoading(false);
      await console.log("user", user);
      setName(user.displayName);
      setEmail(user.email);
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
      setLoading(false);
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
  }, [user]);

  return (
    <div className={styles.Login}>
      {!loading ? <ErrorPopup message="success" color="green" /> : null}

      <HeaderText text="Login" />
      <SocialAuthButton
        text="CONTINUE WITH FACEBOOK"
        bg="#1F4490"
        color="#ffffff"
        onclick={signInWithFacebook}
      />
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
        <Label text="Forgot password?" />
        <AuthenticationButton
          text="Login"
          submit={"submit"}
          onclick={handleSubmit}
        />
      </form>
      <p style={{ color: "red" }}> {error}</p>
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

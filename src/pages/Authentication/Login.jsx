import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../hooks/auth/UserAuthContext";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

import styles from "./styles.module.css";

import { FiEye, FiEyeOff } from "react-icons/fi";

import { signInWithGoogle } from "../../firebase";

import HeaderText from "../../components/elements/HeaderText/HeaderText";
import SocialAuthButton from "../../components/elements/SocialAuthButton/SocialAuthButton";
import InputLabel from "../../components/elements/InputLabel/InputLabel";
import Label from "../../components/elements/Label/Label";
import AuthenticationButton from "../../components/elements/AuthenticationButton/AuthenticationButton";

import ErrorPopup from "../../components/containers/ErrorPopup/ErrorPopup";
import { flexbox } from "@mui/system";

const Login = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");

  const [accountType, setAccountType] = useState("volunteer");

  const { user } = useUserAuth();

  const [passwordType, setPasswordType] = useState("password");

  const fetchAccountType = async (uid) => {
    const docRef = doc(db, "volunteers", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return;
    }
  };

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

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithGoogle();
      setLoading(false);
      await console.log("user", user);
      setName(user.displayName);
      setEmail(user.email);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await logIn(email, password);
      await fetchAccountType(user.uid);
      setLoading(false);
      navigate("/home");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return (
    <div className={styles.Login}>
      {loading ? <ErrorPopup message="success" color="green" /> : null}

      <HeaderText text="Login" />
      <SocialAuthButton
        text="CONTINUE WITH FACEBOOK"
        bg="#1F4490"
        color="#ffffff"
      />
      <SocialAuthButton text="CONTINUE WITH APPLE" bg="#0E0E0F" color="#ffff" />
      <SocialAuthButton
        onclick={handleGoogleLogin}
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
            maxWidth: "400px",
            height: "120px",
          }}
        >
          <input
            type="radio"
            id="volunteer"
            name="account_type"
            value="volunteer"
            defaultChecked
            onClick={() => setAccountType("volunteer")}
          />
          <label htmlFor="volunteer">Volunteer</label>
          <br />
          <input
            type="radio"
            id="oranization"
            name="account_type"
            value="organization"
            onClick={() => setAccountType("organization")}
          />
          <label htmlFor="organization">Organization</label>
          <br />
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

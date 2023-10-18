import styles from "./styles.module.css";
import logo from "../../../assets/logo-siv.svg";
import HorizontalLine from "../../elements/HorizontalLine/HorizontalLine";

import { db } from "../../../firebase";
import { collection, addDoc, getDocs, where, query } from "firebase/firestore";

import European from "../../../assets/EuropeanUnion.png";

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { WebsiteThemeContext } from "../../../hooks/theme/WebsiteThemeContext";
import { useContext } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailExist, setEmailExist] = useState(false);

  const { theme } = useContext(WebsiteThemeContext);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const CheckEmailExist = async () => {
    const q = query(collection(db, "newsletter"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      if (doc.data().email === email) setEmailExist(true);
    });
  };

  useEffect(() => {
    CheckEmailExist();
  }, [email]);

  const addEmail = async () => {
    if (emailExist) {
      alert("Thank you, you are already subscribed to our newsletter!");
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "newsletter"), {
        email: email,
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Thank you for subscribing to our newsletter!");
      setEmail("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div
      className={styles.Footer}
      style={
        theme === "dark" || theme === "default"
          ? {}
          : { backgroundColor: "rgba(0, 0, 0, 0.8)" }
      }
    >
      <h2>
        Always stay informed with{" "}
        <span style={{ fontWeight: "700" }}>SIVolunteering</span>
      </h2>
      <h2>
        Subscribe to our <span style={{ fontWeight: "700" }}>newsletter</span>
      </h2>
      <div className={styles.InputContainer}>
        <input
          type="email"
          placeholder="Enter your email address"
          onChange={(e) => handleEmail(e)}
          value={email}
        />
        <button onClick={addEmail}>Subscribe</button>
      </div>
      <div className={styles.FooterMain}>
        <div className={styles.FooterMainSocial}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.FooterMainLink}>
          <h3>NAVIGATION</h3>
          <Link to={"/home"} style={{ textDecoration: "none", color: "#fff" }}>
            <p>HOME</p>
          </Link>
          <Link
            to={"/organizations"}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <p>ORGANIZATIONS</p>
          </Link>
          <Link
            to={"/account"}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <p>ACCOUNT</p>
          </Link>
          <Link
            to={"/account/about"}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <p>ABOUT US</p>
          </Link>
          <Link
            to={"/account/help-center"}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <p>HELP</p>
          </Link>
        </div>
        <div className={styles.FooterMainContact}>
          <h3>CONTACT</h3>
          <p>info@sivolunteering.com</p>
        </div>
        <div className={styles.FooterMainLegal}>
          <h3>LEGAL</h3>
          <Link
            to={"/account/privacy"}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <p>PRIVACY POLICY</p>
          </Link>
        </div>
      </div>
      <p>&copy; 2023 SIVolunteering</p>
      <HorizontalLine width={"80%"} />
      <div className={styles.FooterMessage}>
        <img
          src={European}
          alt=""
          style={{ width: "300px", height: "100px", objectFit: "contain" }}
        />
        <div className={styles.FooterMessageText}>
          <p>
            Funded by the European Union, Views and opinions expressed are
            however those of the author(s) only and do not necessarily reflect
            those of the European Union or the European Education and Culture
            Executive Agency (EACEA). Neither the European Union nor EACEA can
            be held responsible for them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

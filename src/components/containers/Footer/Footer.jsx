// import styles from "./styles.module.css";
// // import logo from "../../../assets/globe_cause_logo.png";
// // import HorizontalLine from "../../elements/HorizontalLine/HorizontalLine";

// import { db } from "../../../firebase";
// import { collection, getDocs, where, query } from "firebase/firestore";

// import React, { useCallback, useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import Logo from "../../elements/Logo/Logo";

// const Footer = () => {
//   const [email, setEmail] = useState("");
//   const [emailExist, setEmailExist] = useState(false);
//   // const { theme } = useContext(WebsiteThemeContext);

//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const CheckEmailExist = useCallback(async () => {
//     const q = query(collection(db, "newsletter"), where("email", "==", email));
//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
//       if (doc.data().email === email) setEmailExist(true);
//     });
//   }, [email]);

//   useEffect(() => {
//     if (email) CheckEmailExist();
//   }, [email, CheckEmailExist]);

//   const addEmail = async () => {
//     if (emailExist) {
//       alert("Thank you, you are already subscribed to our newsletter!");
//       return;
//     }
//     try {
//       alert("Thank you for subscribing to our newsletter!");
//       setEmail("");
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   };

//   return (
//     <div
//       className={styles.Footer}
//       // style={
//       //   theme === "dark" || theme === "default"
//       //     ? {}
//       //     : { backgroundColor: "rgba(0, 0, 0, 0.8)" }
//       // }
//     >
//       <h2>
//         Always stay informed with{" "}
//         <span style={{ fontWeight: "700" }}>Globe Cause</span>
//       </h2>
//       <h2>
//         Subscribe to our <span style={{ fontWeight: "700" }}>newsletter</span>
//       </h2>
//       <div className={styles.InputContainer}>
//         <input
//           type="email"
//           placeholder="Enter your email address"
//           onChange={handleEmail}
//           value={email}
//         />
//         <button onClick={addEmail}>Subscribe</button>
//       </div>
//       <div className={styles.FooterMain}>
//         <div className={styles.FooterMainSocial}>
//           {/* <img src={logo} alt="Globe Cause Logo" /> */}
//           <Logo />
//         </div>
//         <div className={styles.FooterMainLink}>
//           <h3>NAVIGATION</h3>
//           <Link to={"/home"} style={{ textDecoration: "none", color: "#1F1246" }}>
//             <p>HOME</p>
//           </Link>
//           <Link
//             to={"/organizations"}
//             style={{ textDecoration: "none", color: "#1F1246" }}
//           >
//             <p>ORGANIZATIONS</p>
//           </Link>
//           <Link
//             to={"/account"}
//             style={{ textDecoration: "none", color: "#1F1246" }}
//           >
//             <p>ACCOUNT</p>
//           </Link>
//           <Link
//             to={"/account/about"}
//             style={{ textDecoration: "none", color: "#1F1246" }}
//           >
//             <p>ABOUT US</p>
//           </Link>
//           <Link
//             to={"/account/help-center"}
//             style={{ textDecoration: "none", color: "#1F1246" }}
//           >
//             <p>HELP</p>
//           </Link>
//         </div>
//         <div className={styles.FooterMainContact}>
//           <h3>CONTACT</h3>
//           <p>info@globecause.com</p>
//         </div>
//         <div className={styles.FooterMainLegal}>
//           <h3>LEGAL</h3>
//           <Link
//             to={"/account/privacy"}
//             style={{ textDecoration: "none", color: "#1F1246" }}
//           >
//             <p>PRIVACY POLICY</p>
//           </Link>
//         </div>
//       </div>
//       <p>&copy; 2024 Globe Cause</p>
//     </div>
//   );
// };

// export default Footer;


import styles from "./styles.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../elements/Logo/Logo";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const addEmail = () => {
    if (subscribed) {
      alert("Thank you, you are already subscribed to our newsletter!");
      return;
    }
    // Simulate adding email to a subscription list
    alert("Thank you for subscribing to our newsletter!");
    setSubscribed(true);
    setEmail(""); // Clear the input field
  };

  return (
    <div className={styles.Footer}>
      <h2>
        Always stay informed with{" "}
        <span style={{ fontWeight: "700" }}>Globe Cause</span>
      </h2>
      <h2>
        Subscribe to our <span style={{ fontWeight: "700" }}>newsletter</span>
      </h2>
      <div className={styles.InputContainer}>
        <input
          type="email"
          placeholder="Enter your email address"
          onChange={handleEmail}
          value={email}
        />
        <button onClick={addEmail}>Subscribe</button>
      </div>
      <div className={styles.FooterMain}>
        <div className={styles.FooterMainSocial}>
          <Logo />
        </div>
        <div className={styles.FooterMainLink}>
          <h3>NAVIGATION</h3>
          <Link to={"/home"} style={{ textDecoration: "none", color: "#1F1246" }}>
            <p>HOME</p>
          </Link>
          <Link to={"/organizations"} style={{ textDecoration: "none", color: "#1F1246" }}>
            <p>ORGANIZATIONS</p>
          </Link>
          <Link to={"/account"} style={{ textDecoration: "none", color: "#1F1246" }}>
            <p>ACCOUNT</p>
          </Link>
          <Link to={"/account/about"} style={{ textDecoration: "none", color: "#1F1246" }}>
            <p>ABOUT US</p>
          </Link>
          <Link to={"/account/help-center"} style={{ textDecoration: "none", color: "#1F1246" }}>
            <p>HELP</p>
          </Link>
        </div>
        <div className={styles.FooterMainContact}>
          <h3>CONTACT</h3>
          <p>info@globecause.com</p>
        </div>
        <div className={styles.FooterMainLegal}>
          <h3>LEGAL</h3>
          <Link to={"/account/privacy"} style={{ textDecoration: "none", color: "#1F1246" }}>
            <p>PRIVACY POLICY</p>
          </Link>
        </div>
      </div>
      <p>&copy; 2024 Globe Cause</p>
    </div>
  );
};

export default Footer;


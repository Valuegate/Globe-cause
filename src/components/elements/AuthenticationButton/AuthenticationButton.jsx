import React from "react";
import styles from "./styles.module.css";

const AuthenticationButton = ({ text, icon, onclick, bg, color, submit, loading }) => {
  return (
    <button
      className={styles.AuthenticationButton}
      onClick={onclick}
      style={{ backgroundColor: bg, color: color, border: "none" }}
      type={submit}
      disabled={loading} // Disable button while loading
    >
      {loading ? (
        <span>Loading...</span> // Loading indicator (you can customize this)
      ) : (
        <>
          <p>{text}</p>
          <div className={styles.Icon}>{icon}</div>
        </>
      )}
    </button>
  );
};

export default AuthenticationButton;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../components/elements/Logo/Logo";
import styles from "./styles.module.css";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/landing");
    }, 5 * 1000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.Splash}>
      <Logo />
    </div>
  );
};

export default Splash;

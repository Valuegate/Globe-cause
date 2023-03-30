import React, { useState } from "react";

import styles from "./styles.module.css";
import InputLabel from "../../../components/elements/InputLabel/InputLabel";
import BackButton from "../../../components/elements/BackButton/BackButton";
import AuthenticationButton from "../../../components/elements/AuthenticationButton/AuthenticationButton";

import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../hooks/auth/UserAuthContext";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const navigate = useNavigate();
  const { updatePassword } = useUserAuth();

  const checkPassword = () => {
    if (newPassword === confirmNewPassword) {
      console.log("passwords match");
    } else {
      console.log("passwords do not match");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      updatePassword(currentPassword, newPassword);
      navigate("/account");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form className={styles.ChangePassword} onSubmit={handleSubmit}>
      <h3 className={styles.PageHeader}>Change Password</h3>
      <div className={styles.Form}>
        <InputLabel
          label="Current Password"
          type="password"
          placeholder="Current Password"
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <InputLabel
          label="New Password"
          type="password"
          placeholder="New Password"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <InputLabel
          label="Confirm New Password"
          type="password"
          placeholder="Confirm New Password"
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
      </div>
      <AuthenticationButton text="update" onclick={handleSubmit} />
      <BackButton color="#0E0E0F" to="/account" />
    </form>
  );
};

export default ChangePassword;

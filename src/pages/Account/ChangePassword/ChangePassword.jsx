import React, { useState, useContext } from "react";
import styles from "./styles.module.css";
import InputLabel from "../../../components/elements/InputLabel/InputLabel";
import BackButton from "../../../components/elements/BackButton/BackButton";
import AuthenticationButton from "../../../components/elements/AuthenticationButton/AuthenticationButton";
import { useNavigate } from "react-router-dom";
import { WebsiteThemeContext } from "../../../hooks/theme/WebsiteThemeContext";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // Add error state

  const { theme } = useContext(WebsiteThemeContext);
  const navigate = useNavigate();

  // Password match validation
  const checkPassword = () => {
    if (newPassword !== confirmNewPassword) {
      setError("Passwords do not match");
      return false;
    }
    setError("");
    return true;
  };

  // Backend API call to change password
  const changePasswordAPI = async () => {
    const payload = {
      password: newPassword,
      text: "Change Password Request", // Replace this with a relevant description if needed
      username: "user@example.com" // Replace with the actual logged-in user's username
    };

    try {
      const response = await fetch('https://scoutflair.top:8081/globeCause/v1/signup/changePassword', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      
      if (!response.ok) {
        throw new Error("Failed to change password");
      }
      
      return response.json();
    } catch (err) {
      throw new Error(err.message);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!checkPassword()) return; // Prevent form submission if passwords don't match
    
    try {
      setLoading(true); // Set loading to true before request
      await changePasswordAPI(); // Call the backend API for password change
      setTimeout(() => {
        alert("Password updated successfully!");
        navigate("/account"); // Redirect after successful update
      }, 1000);
    } catch (err) {
      console.log(err.message);
      setError(err.message); // Show error if the API fails
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <form className={styles.ChangePassword} onSubmit={handleSubmit}>
      <h3
        className={styles.PageHeader}
        style={
          theme === "default" || theme === "dark"
            ? { color: "#fff" }
            : { color: "rgb(25, 32, 43)" }
        }
      >
        Change Password
      </h3>

      <div
        className={styles.Form}
        style={
          theme === "default" || theme === "dark"
            ? {}
            : { boxShadow: "0 0 3px 0 rgba(0,0,0,0.5)" }
        }
      >
        <InputLabel
          label="Current Password"
          value={currentPassword}
          type="password"
          placeholder="Current Password"
          color="#fff"
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <InputLabel
          label="New Password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
          color="#fff"
        />
        <InputLabel
          label="Confirm New Password"
          color="#fff"
          type="password"
          value={confirmNewPassword}
          placeholder="Confirm New Password"
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
        
        {error && <p className={styles.Error}>{error}</p>} {/* Show error if any */}
      </div>

      <AuthenticationButton
        submit="submit"
        text={loading ? "Loading..." : "Update Password"} // Show loading state on button
      />
      
      <BackButton color="#0E0E0F" to="/account" />
    </form>
  );
};

export default ChangePassword;

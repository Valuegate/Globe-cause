import React, { useState } from 'react';
import styles from './styles.module.css';
import InputLabel from '../../../components/elements/InputLabel/InputLabel';
import AuthenticationButton from '../../../components/elements/AuthenticationButton/AuthenticationButton';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'; // Import axios

const ResetPassword = () => {
  const [code, setCode] = useState(""); // Recovery code input
  const [username, setUsername] = useState(""); // Username input
  const [newPassword, setNewPassword] = useState(""); // New password input
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Error state

  const navigate = useNavigate();
  const { email } = useParams(); // Get email from URL params (sent from the first step)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error

    try {
      // Make the POST request to reset the password using the recovery code, password, and username
      const response = await axios.post(
        `https://scoutflair.top:8081/globeCause/v1/signup/recover/second`,
        {
          password: newPassword,
          text: code, // This is the recovery code
          username: email || username, // You can either pass email or username
        }
      );

      if (response.data.success) {
        setLoading(false);
        alert('Password reset successful. Please login with your new password.');
        navigate("/login"); // Redirect to login page
      } else {
        throw new Error('Failed to reset password');
      }
    } catch (err) {
      console.error('Error:', err.message);
      setError('Failed to reset password. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div>
      <form className={styles.Login} onSubmit={handleSubmit}>
        <div className={styles.Inputs}>
          <InputLabel
            label="Recovery Code"
            type="text"
            placeholder="Enter the code you received"
            onChange={(e) => setCode(e.target.value)}
          />
          <InputLabel
            label="Username / Email"
            type="text"
            placeholder="Enter your username / email"
            value={email || username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputLabel
            label="New Password"
            type="text"
            placeholder="Enter your new password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <AuthenticationButton
          text={loading ? "Loading..." : "Reset Password"}
          submit="submit"
        />
      </form>
      {error && <p className={styles.Error}>{error}</p>} {/* Display error message */}
    </div>
  );
};

export default ResetPassword;

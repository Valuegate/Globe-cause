import React from 'react';
import styles from './styles.module.css';
import InputLabel from '../../../components/elements/InputLabel/InputLabel';
import AuthenticationButton from '../../../components/elements/AuthenticationButton/AuthenticationButton';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for API requests

const ForgotPassword = () => {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null); // Error state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error before the request

    try {
      // Call the recoverFirst API with the user's email
      const response = await axios.get(
        `https://scoutflair.top:8081/globeCause/v1/signup/recover/first/${email}/`
      );

      if (response.data.success) {
        setLoading(false);
        alert('A recovery code has been sent to your email.');
        navigate(`/reset-password`); // Redirect to the reset password page
      } else {
        throw new Error('Failed to send recovery email');
      }
    } catch (err) {
      console.error('Error:', err.message);
      setError('Failed to send recovery email. Please try again.'); // Set error message
      setLoading(false);
    }
  };

  return (
    <div>
      <form className={styles.Login} onSubmit={handleSubmit}>
        <div className={styles.Inputs}>
          <InputLabel
            label="Email"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
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

export default ForgotPassword;

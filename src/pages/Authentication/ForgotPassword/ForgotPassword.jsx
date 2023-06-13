import React from 'react'
import styles from './styles.module.css'
import InputLabel from '../../../components/elements/InputLabel/InputLabel'
import AuthenticationButton from '../../../components/elements/AuthenticationButton/AuthenticationButton'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from "../../../hooks/auth/UserAuthContext";

const ForgotPassword = () => {
    const [email, setEmail] = React.useState();
    const [loading, setLoading] = React.useState(true)

    const navigate = useNavigate();
  const { reSet } = useUserAuth();
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    try {
      await reSet(email);
      setLoading(false);
      setTimeout(() => {
           alert('success');
        }, 1000);
      navigate("/login");
    } catch (err) {
      // setLoading(false);
      console.log(err.message);
    }
  };
  return (
    <div>
         <form className={styles.Login}>
        <div className={styles.Inputs}>
          <InputLabel
            label="Email"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <AuthenticationButton
          text={loading ? "Reset Password" : "loading..."}
          submit={"submit"}
          onclick={handleSubmit}
        />
      </form>
    </div>
  )
}

export default ForgotPassword
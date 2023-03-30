import styles from "./styles.module.css";
import InputLabel from "../../../components/elements/InputLabel/InputLabel";
import BackButton from "../../../components/elements/BackButton/BackButton";
import AuthenticationButton from "../../../components/elements/AuthenticationButton/AuthenticationButton";
import {useState} from 'react'

const ChangePassword = () => {

  const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(false);

  const handleSubmit=(e)=>{
    
    e.preventDefault();

    console.log('hello')

    if(newPassword === confirmPassword){
      setError(false);
      console.log(newPassword, password)
    }else{
      setError(true)
    }
  }

  return (
    <div className={styles.ChangePassword}>
      <h3 className={styles.PageHeader}>Change Password</h3>
      <form onSubmit={handleSubmit} className={styles.Form}>
        <InputLabel
          label="Current Password"
          // value={password}
          onChange={(e)=>setPassword(e.target.value)}
          type="password"
          placeholder="Current Password"
        />
        <InputLabel
          label="New Password"
          type="password"
          // value={newPassword}
          onChange={(e)=>setNewPassword(e.target.value)}
          placeholder="New Password"
        />
        <InputLabel
          label="Confirm New Password"
          type="password"
          // value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
          placeholder="Confirm New Password"
        />
      </form>
      <AuthenticationButton submit={'submit'} text="update" />
      <BackButton color="#0E0E0F" to="/account" />
    </div>
  );
};

export default ChangePassword;

import InputLabel from "../../../components/elements/InputLabel/InputLabel";
import BackButton from "../../../components/elements/BackButton/BackButton";
import styles from "./styles.module.css";
import AuthenticationButton from "../../../components/elements/AuthenticationButton/AuthenticationButton";
import Label from "../../../components/elements/Label/Label";

const EditProfile = () => {
  return (
    <div className={styles.EditProfile}>
      <h3 className={styles.PageHeader}>Edit Profile</h3>
      <div className={styles.InputContainer}>
        <InputLabel label="Name" type="text" placeholder="Edit name" />
        <InputLabel label="Email" type="email" placeholder="Edit email" />
        <InputLabel label="Phone Number" type="text" placeholder="Edit phone" />
      </div>
      <AuthenticationButton text="update" />
      <Label text="Change Password" color="#1F4490" />
      <BackButton color="#0E0E0F" to="/account" />
    </div>
  );
};

export default EditProfile;

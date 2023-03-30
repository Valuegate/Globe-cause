import InputLabel from "../../../components/elements/InputLabel/InputLabel";
import BackButton from "../../../components/elements/BackButton/BackButton";
import styles from "./styles.module.css";
import AuthenticationButton from "../../../components/elements/AuthenticationButton/AuthenticationButton";
import Label from "../../../components/elements/Label/Label";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { db } from "../../../firebase";
import { collection, doc, setDoc } from "firebase/firestore";

import { useUserAuth } from "../../../hooks/auth/UserAuthContext";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { user, updateEmailAddress } = useUserAuth();

  const updateProfile = async ({ id }) => {
    await setDoc(doc(db, "volunteers", id), {
      name: name,
      email: email,
      phone_number: phone,
    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      updateEmailAddress(email, password);
      console.log(user.uid);
      updateProfile({ id: user.UID });
      navigate("/account");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className={styles.EditProfile}>
      <h3 className={styles.PageHeader}>Edit Profile</h3>

      <form className={styles.InputContainer}>
        <InputLabel
          label="Name"
          type="text"
          placeholder="Edit name"
          onChange={(e) => setName(e.target.value)}
        />
        <InputLabel
          label="Email"
          type="email"
          placeholder="Change email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputLabel
          label="Phone Number"
          type="text"
          placeholder="Edit phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <InputLabel
          label="Password"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <AuthenticationButton text="update" onclick={handleSubmit} />
      </form>

      <Label text="Change Password" color="#1F4490" />
      <BackButton color="#0E0E0F" to="/account" />
      
    </div>
  );
};

export default EditProfile;

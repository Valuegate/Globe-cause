import InputLabel from "../../../components/elements/InputLabel/InputLabel";
import BackButton from "../../../components/elements/BackButton/BackButton";
import styles from "./styles.module.css";
import AuthenticationButton from "../../../components/elements/AuthenticationButton/AuthenticationButton";
import Label from "../../../components/elements/Label/Label";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { UserAthorizationContext } from "../../../hooks/authorization/UserAuthorizationContext";

import { db } from "../../../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

import { useUserAuth } from "../../../hooks/auth/UserAuthContext";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const { role } = useContext(UserAthorizationContext);

  const navigate = useNavigate();

  const { user, updateEmailAddress } = useUserAuth();

  const getProfile = async (id, database) => {
    const docRef = doc(db, database, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setName(docSnap.data().name);
      setEmail(docSnap.data().email_address || docSnap.data().email);
      setPhone(docSnap.data().phone_number);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    if (user) {
      if (role === "volunteer") {
        getProfile(user.uid, "volunteers");
      } else {
        getProfile(user.uid, `organisations_${role}`);
      }
    }
  }, [user]);

  const updateProfile = async ({ id, database }) => {
    await setDoc(doc(db, database, id), {
      name: name,
      email: email,
      phone_number: phone,
    })
      .then(() => {
        alert("Profile updated successfully");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      updateEmailAddress(email, password);

      console.log(user.UID);
      if (role === "volunteer") {
        updateProfile({ id: user.uid, database: "volunteers" });
      } else {
        updateProfile({
          id: user.UID,
          database: `organisations_${role}`,
        });
      }
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
          value={name}
          placeholder="Edit name"
          onChange={(e) => setName(e.target.value)}
        />
        <InputLabel
          label="Email"
          type="email"
          value={email}
          placeholder="Change email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputLabel
          label="Phone Number"
          type="text"
          value={phone}
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

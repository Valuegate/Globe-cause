import React from "react";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../hooks/auth/UserAuthContext";

import { db } from "../../../firebase";
import { doc, setDoc } from "firebase/firestore";

import HeaderText from "../../../components/elements/HeaderText/HeaderText";
// import SocialAuthButton from "../../../components/elements/SocialAuthButton/SocialAuthButton";
import InputLabel from "../../../components/elements/InputLabel/InputLabel";
import Label from "../../../components/elements/Label/Label";
import AuthenticationButton from "../../../components/elements/AuthenticationButton/AuthenticationButton";

import ProfileSetup from "../../../components/containers/ProfileSetup/ProfileSetup";
import InputPhone from "../../../components/elements/InputLabel/InputPhone";
import InputSelect from "../../../components/elements/InputLabel/InputSelect";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [, setError] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  //organization state
  const [orgName, setOrgName] = useState("");
  const [orgEmail, setOrgEmail] = useState("");
  const [orgPhone, setOrgPhone] = useState("");
  const [orgPassword, setOrgPassword] = useState("");
  const [orgCountry, setOrgCountry] = useState("");
  const [orgCity, setOrgCity] = useState("");
  const [village, setVillage] = useState("");
  const [tagline, setTagline] = useState("");
  const [oid, setOid] = useState("");
  const [members, setMembers] = useState("");
  const [website, setWebsite] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [short_description, setShortDescription] = useState("");

  const [accountType, setAccountType] = useState("volunteer");

  const { signUp, user, sendEmailVerification, googleSignIn } = useUserAuth();

  const changeHandler = (country) => {
    setCountry(country);
  };

  const createProfile = async (id) => {
    await setDoc(doc(db, "volunteers", id), {
      country: country,
      date_created: new Date(),
      email_address: email,
      name: name,
      phone_number: phone,
      profile_image_url: "",
    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  //create organization profile
  const createOrgProfile = async (id) => {
    await setDoc(doc(db, `organisations_${orgCountry}`, id), {
      city: orgCity,
      country: orgCountry,
      date_created: new Date(),
      email: orgEmail,
      facebook: facebook,
      linkedin: linkedin,
      approximate_local_members: members,
      name: orgName,
      oid: oid,
      phone_number: orgPhone,
      profile_image_url: "",
      // tagline: tagline,
      twitter: twitter,
      // village: village,
      website: website,
      isVerified: false,
      short_description: short_description,
    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email || orgEmail, password || orgPassword);
      await sendEmailVerification(user);
    } catch (err) {
      setError(err.message);
      console.log(email);
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (user && accountType === "volunteer") {
      createProfile(user.uid);
      navigate("/account");
    } else if (user && accountType === "organization") {
      createOrgProfile(user.uid);
      navigate("/account");
    }
  }, [user]);

  return (
    <div className={styles.SignUp}>
      <HeaderText text="Sign Up" />
      {/* <SocialAuthButton
        text="CONTINUE WITH FACEBOOK"
        bg="#1F4490"
        color="#ffffff"
      />
      <SocialAuthButton text="CONTINUE WITH APPLE" bg="#0E0E0F" color="#ffff" />
      <SocialAuthButton
        text="CONTINUE WITH GOOGLE"
        bg="#FFFFFF"
        color="#0E0E0F"
        onclick={googleSignIn}
      /> */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          maxWidth: "400px",
          height: "120px",
        }}
      >
        <input
          type="radio"
          id="volunteer"
          name="account_type"
          value="volunteer"
          defaultChecked
          onClick={() => setAccountType("volunteer")}
        />
        <label style={{ color: "#fff" }} htmlFor="volunteer">
          Volunteer
        </label>
        <br />
        <input
          type="radio"
          id="oranization"
          name="account_type"
          value="organization"
          onClick={() => setAccountType("organization")}
        />
        <label style={{ color: "#fff" }} htmlFor="organization">
          Organization
        </label>
        <br />
      </div>
      {accountType === "volunteer" ? (
        <form className={styles.SignUp} onSubmit={handleSubmit}>
          <div className={styles.Inputs}>
            <InputLabel
              label="Name"
              type="text"
              placeholder="Enter your fullname"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <InputLabel
              label="Email"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <InputLabel
              label="Password"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputPhone
              label="Phone Number"
              type="text"
              value={phone}
              onChange={setPhone}
            />
            <InputSelect
              label="Country"
              placeholder="Country"
              value={country}
              onChange={changeHandler}
            />
          </div>
          <Link to="/forgot-password">
            <Label color="#fff" text="Forgot password?" />
          </Link>
          <AuthenticationButton text="Sign up" />
        </form>
      ) : (
        <ProfileSetup
          orgName={orgName}
          setOrgName={setOrgName}
          orgEmail={orgEmail}
          setOrgEmail={setOrgEmail}
          orgPhone={orgPhone}
          setOrgPhone={setOrgPhone}
          orgPassword={orgPassword}
          setOrgPassword={setOrgPassword}
          orgCountry={orgCountry}
          setOrgCountry={setOrgCountry}
          orgCity={orgCity}
          setOrgCity={setOrgCity}
          village={village}
          setVillage={setVillage}
          tagline={tagline}
          setTagline={setTagline}
          oid={oid}
          setOid={setOid}
          members={members}
          setMembers={setMembers}
          website={website}
          setWebsite={setWebsite}
          facebook={facebook}
          setFacebook={setFacebook}
          twitter={twitter}
          setTwitter={setTwitter}
          linkedin={linkedin}
          setLinkedin={setLinkedin}
          submit={handleSubmit}
        />
      )}
      <div className={styles.SignupLabel}>
        <Label color="#fff" text="Already have an account?" /> &nbsp;
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Label text="Login" color="#1F4490" />
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

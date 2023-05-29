import React from "react";
import InputLabel from "../../elements/InputLabel/InputLabel";
import styles from "./styles.module.css";

const ProfileSetup1 = ({
  setName,
  setEmail,
  setTagline,
  setOid,
  setMembers,
  setCountry,
  setVillage,
  setCity,
  setPassword,
  password,
  name,
  email,
  tagline,
  oid,
  members,
  country,
  village,
  city,
}) => {
  return (
    <div className={styles.EditProfile}>
      <InputLabel
        label="Organisation name"
        type="text"
        placeholder="Organization name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputLabel
        label="Organisation Email address"
        type="text"
        placeholder=""
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputLabel
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputLabel
        label="Tagline"
        type="text"
        placeholder=""
        value={tagline}
        onChange={(e) => setTagline(e.target.value)}
      />
      <InputLabel
        label="OID Number"
        type="text"
        placeholder=""
        value={oid}
        onChange={(e) => setOid(e.target.value)}
      />
      <InputLabel
        label="Approx. local no. of active members"
        type="text"
        placeholder=""
        value={members}
        onChange={(e) => setMembers(e.target.value)}
      />
      <InputLabel
        label="Country"
        type="text"
        placeholder=""
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <InputLabel
        label="City"
        type="text"
        placeholder=""
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <InputLabel
        label="Village"
        type="text"
        placeholder=""
        value={village}
        onChange={(e) => setVillage(e.target.value)}
      />
    </div>
  );
};

export default ProfileSetup1;

import React from 'react'
import InputLabel from '../../elements/InputLabel/InputLabel'
import InputSelect from '../../elements/InputLabel/InputSelect';
import styles from "./styles.module.css";

const ProfileSetup1 = ({
  setName,
  setEmail,
  setTagline,
  setOid,
  setMembers,
  setCountry,
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
   const changeHandler = country => {
    setCountry(country)
  }
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
        placeholder="Organisation Email address"
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
        placeholder="Tagline"
        value={tagline}
        onChange={(e) => setTagline(e.target.value)}
      />
      <InputLabel
        label="OID Number"
        type="text"
        placeholder="OID Number"
        value={oid}
        onChange={(e) => setOid(e.target.value)}
      />
      <InputLabel
        label="Approx. local no. of active members"
        type="text"
        placeholder="Approx. local no. of active members"
        value={members}
        onChange={(e) => setMembers(e.target.value)}
      />
      <InputSelect
        label="Country"
        placeholder="Country"
        value='country'
        onChange={changeHandler}
      />
      <InputLabel
        label="City"
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </div>
  );
};

export default ProfileSetup1;

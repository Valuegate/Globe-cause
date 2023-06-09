import React from "react";
import InputLabel from "../../elements/InputLabel/InputLabel";
import styles from "./styles.module.css";

const ProfileSetup2 = ({
  setPhone,
  setWebsite,
  setLinkedin,
  setFacebook,
  setTwitter,
  phone,
  website,
  linkedin,
  facebook,
  twitter,
}) => {
  return (
    <div className={styles.EditProfile}>
      <InputLabel
        label="Phone Number"
        type="text"
        placeholder=""
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <InputLabel
        label="Website address"
        type="text"
        placeholder=""
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <InputLabel
        label="LinkedIn"
        type="text"
        placeholder=""
        value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)}
      />
      <InputLabel
        label="Facebook"
        type="text"
        placeholder=""
        value={facebook}
        onChange={(e) => setFacebook(e.target.value)}
      />
      <InputLabel
        label="Twitter"
        type="text"
        placeholder=""
        value={twitter}
        onChange={(e) => setTwitter(e.target.value)}
      />
    </div>
  );
};

export default ProfileSetup2;

import React from "react";
import InputLabel from "../../elements/InputLabel/InputLabel";
import InputPhone from "../../elements/InputLabel/InputPhone";
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
      <div className={styles.Organisation2}>
      <InputPhone
        label="Phone Number"
        type="text"
        value={phone}
        onChange={setPhone}
      />
      <InputLabel
        label="Website address"
        type="text"
        placeholder="Website address"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <InputLabel
        label="LinkedIn"
        type="text"
        placeholder="LinkedIn"
        value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)}
      />
      <InputLabel
        label="Facebook"
        type="text"
        placeholder="Facebook"
        value={facebook}
        onChange={(e) => setFacebook(e.target.value)}
      />
      <InputLabel
        label="Twitter"
        type="text"
        placeholder="Twitter"
        value={twitter}
        onChange={(e) => setTwitter(e.target.value)}
      />
    </div>
    </div>
  );
};

export default ProfileSetup2;

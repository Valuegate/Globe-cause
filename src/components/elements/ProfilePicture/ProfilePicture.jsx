import styles from "./styles.module.css";

const ProfilePicture = ({ src, alt }) => {
  return (
    <div className={styles.ProfilePicture}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default ProfilePicture;

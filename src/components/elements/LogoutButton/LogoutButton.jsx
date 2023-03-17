import styles from "./styles.module.css";

const LogoutButton = ({ text, onClick }) => {
    return (
        <div className={styles.LogoutButton} onClick={onClick}>
        <p>{text}</p>
        </div>
    );
    }

export default LogoutButton;
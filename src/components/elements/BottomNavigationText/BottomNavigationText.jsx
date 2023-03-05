import styles from "./styles.module.css";

const BottomNavigationText = ({ text, children, onclick }) => {
  return (
    <div className={styles.BottomNavigationText} onClick={onclick}>
      <p>{text}</p>
      {children}
    </div>
  );
};

export default BottomNavigationText;

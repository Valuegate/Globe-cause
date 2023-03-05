import styles from "./styles.module.css";

const Label = ({ text, color }) => {
  return (
    <div className={styles.Label} style={{ color: color }}>
      <p>{text}</p>
    </div>
  );
};

export default Label;

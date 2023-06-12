import styles from "./styles.module.css";

const Label = ({ text, color, fontSize }) => {
  return (
    <div className={styles.Label} style={{ color: color, fontSize: fontSize }}>
      <p>{text}</p>
    </div>
  );
};

export default Label;

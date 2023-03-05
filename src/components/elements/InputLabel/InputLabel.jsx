import styles from "./styles.module.css";

import Label from "../Label/Label";

const InputLabel = ({ label, type, placeholder }) => {
  return (
    <div className={styles.InputLabel}>
      <Label text={label} />
      <div className={styles.Input}>
        <input type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default InputLabel;

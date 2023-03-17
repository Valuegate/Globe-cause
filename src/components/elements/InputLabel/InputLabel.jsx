import styles from "./styles.module.css";

import Label from "../Label/Label";

const InputLabel = ({ label, type, placeholder, onChange }) => {
  return (
    <div className={styles.InputLabel}>
      <Label text={label} />
      <div className={styles.Input}>
        <input type={type} placeholder={placeholder} onChange={onChange} />
      </div>
    </div>
  );
};

export default InputLabel;

import styles from "./styles.module.css";

import Label from "../Label/Label";

const InputLabel = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  color,
  width,
}) => {
  return (
    <div className={styles.InputLabel}>
      <Label text={label} color={color || "#fff"} />
      <div className={styles.Input}>
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          
        />
      </div>
    </div>
  );
};

export default InputLabel;

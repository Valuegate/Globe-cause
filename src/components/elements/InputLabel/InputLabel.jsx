import React from "react";
import styles from "./styles.module.css";

import Label from "../Label/Label";

import { useContext } from "react";
import { WebsiteThemeContext } from "../../../hooks/theme/WebsiteThemeContext";

const InputLabel = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  color,
  width,
}) => {
  const { theme } = useContext(WebsiteThemeContext);

  return (
    <div className={styles.InputLabel}>
      <Label
        text={label}
        color={
          theme === "default" || theme === "dark"
            ? "#fff"
            : "rgb(25, 32, 43)"
        }
      />
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

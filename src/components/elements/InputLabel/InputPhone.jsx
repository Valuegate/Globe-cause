import React from "react";
import styles from "./styles.module.css";
import Label from "../Label/Label";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const InputPhone = ({ label, onChange,value }) => {

    
   

  return (
    <div className={styles.InputLabel}>
      <Label color='#1F1246' text={label}/>
      <div className={styles.Input} >
       <PhoneInput
      placeholder="Phone Number"
      value={value}
      className={styles.Input}
      onChange={onChange}/>
      </div>
    </div>
  );
};

export default InputPhone;

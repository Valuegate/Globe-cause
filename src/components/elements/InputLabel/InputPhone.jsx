import styles from "./styles.module.css";
import axios from "axios";
import Label from "../Label/Label";
import { useEffect } from "react";
import { useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const InputPhone = ({ label, onChange,value }) => {

    
   

  return (
    <div className={styles.InputLabel}>
      <Label color='#fff' text={label}/>
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

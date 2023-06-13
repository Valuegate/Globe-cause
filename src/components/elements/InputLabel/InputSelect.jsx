import styles from "./styles.module.css";
import axios from "axios";
import Label from "../Label/Label";
import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

const InputSelect = ({ label, type, placeholder,value, onChange }) => {
    
  const options = useMemo(() => countryList().getData(), [])

 

  return (
    <div className={styles.InputLabel}>
      <Label color='#fff' text={label}/>
      <div >
        <Select className={styles.Input} options={options} value={value} onChange={onChange} />
        {/* <select name="" id="" className={styles.Input} onChange={onChange}>
            <option placeholder={placeholder} value={countries?.country}>{countries?.country}</option>
        </select> */}
      </div>
    </div>
  );
};

export default InputSelect;

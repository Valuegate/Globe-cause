import styles from "./styles.module.css";
import Label from "../Label/Label";
import React, { useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

const InputSelect = ({ label, value, onChange }) => {
    
  const options = useMemo(() => countryList().getData(), [])

 

  return (
    <div className={styles.InputLabel}>
      <Label color='#1F1246' text={label}/>
      <div className={styles.Input} >
        <Select className={styles.Input} options={options} value={value} onChange={onChange} />
        {/* <select name="" id="" className={styles.Input} onChange={onChange}>
            <option placeholder={placeholder} value={countries?.country}>{countries?.country}</option>
        </select> */}
      </div>
    </div>
  );
};

export default InputSelect;

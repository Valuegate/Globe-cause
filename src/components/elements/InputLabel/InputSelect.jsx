import styles from "./styles.module.css";
import axios from "axios";
import Label from "../Label/Label";
import { useEffect } from "react";
import { useState } from "react";

const InputSelect = ({ label, type, placeholder,value, onChange }) => {
    
    const validate = () => {
   
    axios({
      method: 'get',
      responseType: 'json',
      url: 'https://countriesnow.space/api/v0.1/countries',
    //   data: input,
    })
      .then(response => {
        Object.keys(response.data["items"]).forEach(function(key) {       console.log(response.data["items"][key].country);     })
       
    console.log(response.data.data[0].country)
    setCountries(response.data.country)
    // navigate('/dashboard');
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    validate();
    }, []);

    const [countries, setCountries] = useState([]);

  return (
    <div className={styles.InputLabel}>
      <Label text={label}/>
      <div className={styles.Input}>
        {/* <input type={type} value={value} placeholder={placeholder} onChange={onChange} /> */}
        <select name="" id="" onChange={onChange}>
            <option placeholder={placeholder} value={countries?.country}>{countries?.country}</option>
        </select>
      </div>
    </div>
  );
};

export default InputSelect;

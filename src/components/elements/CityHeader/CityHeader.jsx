import React from "react";
import styles from "./styles.module.css";

const CityHeader = (city) => {
  return (
    <div className={styles.CityHeader}>
      <h1>{city.city}</h1>
      <h2>{city.country}</h2>
    </div>
  );
};

export default CityHeader;

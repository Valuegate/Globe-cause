import React from "react";
import styles from "./styles.module.css";

const OrganizationCard = ({ name, country, image }) => {
  return (
    <div className={styles.OrganizationCard}>
      <div className={styles.OrganizationCardImage}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.OrganizationCardText}>
        <h2>{country}</h2>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default OrganizationCard;

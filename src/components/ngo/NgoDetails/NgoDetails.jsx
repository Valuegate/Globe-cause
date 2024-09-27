import React from "react";
import { useParams } from "react-router-dom";
import ngoData from "../../../data/ngoData"; // Adjust the path as needed
import styles from "./styles.module.css";

const NgoDetails = () => {
  const { state, id } = useParams();
  const ngos = ngoData[state] || []; // Default to empty array if state is not found
  const ngo = ngos.find((ngo) => ngo.id === parseInt(id));

  if (!ngo) {
    return <p>No NGO found for this ID.</p>; // Message if NGO is not found
  }

  return (
    <div className={styles.container}>
    <div className={styles.subContainer}>
      <h1 className={styles.heading}>{ngo.name}</h1>
      <p><strong>Phone:</strong> {ngo.phone}</p>
      <p>
        <strong>Website:</strong>
        <a href={ngo.website} target="_blank" rel="noopener noreferrer" className={styles.link}>
          {ngo.website}
        </a>
      </p>
      <p><strong>Email:</strong> {ngo.email}</p>
      </div>
    </div>
  );
};

export default NgoDetails;

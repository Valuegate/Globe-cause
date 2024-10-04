// import React from "react";
// import { useParams } from "react-router-dom";
// import ngoData from "../../../data/ngoData"; // Adjust the path as needed
// import styles from "./styles.module.css";

// const NgoDetails = () => {
//   const { state, id } = useParams();
//   const ngos = ngoData[state] || []; // Default to empty array if state is not found
//   const ngo = ngos.find((ngo) => ngo.id === parseInt(id));

//   if (!ngo) {
//     return <p>No NGO found for this ID.</p>; // Message if NGO is not found
//   }

//   return (
//     <div className={styles.container}>
//     <div className={styles.subContainer}>
//       <h1 className={styles.heading}>{ngo.name}</h1>
//       <p><strong>Phone:</strong> {ngo.phone}</p>
//       <p>
//         <strong>Website:</strong>
//         <a href={ngo.website} target="_blank" rel="noopener noreferrer" className={styles.link}>
//           {ngo.website}
//         </a>
//       </p>
//       <p><strong>Email:</strong> {ngo.email}</p>
//       </div>
//     </div>
//   );
// };

// export default NgoDetails;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";
import BackButton from "../../elements/BackButton/BackButton";

const NgoDetails = () => {
  const { id } = useParams();
  const [ngo, setNgo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNgoDetails(id);
  }, [id]);

  const fetchNgoDetails = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("User is not authenticated");
      }

      const response = await axios.get(`https://scoutflair.top:8081/api/v1/profile/organizations/byId?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setNgo(response.data);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          setError("Unauthorized access. Please log in.");
        } else if (error.response.status === 403) {
          setError("You do not have permission to view this NGO.");
        } else if (error.response.status === 404) {
          setError("No NGO found for this ID.");
        } else {
          setError("Failed to fetch NGO details. Please try again later.");
        }
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className={styles.ngoData}>Loading NGO details...</p>;
  }

  if (error) {
    return <p className={styles.ngoData}>{error}</p>;
  }

  if (!ngo) {
    return <p className={styles.ngoData}>No NGO found for this ID.</p>;
  }

  return (
    <div className={styles.container}>
      <BackButton color="#541A46" to="/home" />
      <div className={styles.subContainer}>
        <h1 className={styles.heading}>{ngo.name}</h1>
        <p><strong>Phone:</strong> {ngo.phone}</p>
        <p><strong>Email:</strong> {ngo.email}</p>
        <p><strong>Website:</strong> 
          <a href={ngo.website} target="_blank" rel="noopener noreferrer" className={styles.link}>
            {ngo.website}
          </a>
        </p>
        <p><strong>Address:</strong> {ngo.address}</p>
        <p><strong>City:</strong> {ngo.city}</p>
        {/* Add more fields if necessary */}
      </div>
    </div>
  );
};

export default NgoDetails;

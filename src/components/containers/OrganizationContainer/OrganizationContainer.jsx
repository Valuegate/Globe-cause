import styles from "./styles.module.css";
// import organizations from "../../../Demo/Api/Organizations";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

import OrganizationCard from "../../elements/OrganizationCard/OrganizationCard";

const OrganizationContainer = () => {
  const [organizations, setOrganizations] = useState([]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const fetchPost = async () => {
    await getDocs(collection(db, `organisations_portugal`)).then(
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setOrganizations(newData);
        console.log(newData);
      }
    );
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className={styles.Organizations}>
      {organizations.map((organization, key) => (
        <Link
          to={`/organization/${organization.id}`}
          style={{ textDecoration: "none", display: "block" }}
          key={key}
          state={{ id: organization.id, filter: "Portugal" }}
        >
          <OrganizationCard
            name={truncate(organization.name, 20)}
            image={organization.logo_link}
            key={organization.id}
            country={organization.city}
          />
        </Link>
      ))}
    </div>
  );
};

export default OrganizationContainer;

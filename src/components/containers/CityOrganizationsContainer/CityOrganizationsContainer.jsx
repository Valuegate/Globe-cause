import styles from "./styles.module.css";
import { collection, query, where } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OrganizationCard from "../../elements/OrganizationCard/OrganizationCard";

const CityOrganizationsContainer = ({ city, filter }) => {
  const [organizations, setOrganizations] = useState([]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const fetchPost = async (country) => {
    await getDocs(
      query(
        collection(db, `organizations_${country.toLowerCase()}`),
        where("city", "==", city)
      )
    ).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setOrganizations(newData);
    });
  };

  useEffect(() => {
    fetchPost(filter);
  }, []);

  return (
    <div className={styles.CityOrganizationsContainer}>
      {organizations.map((organization, key) => (
        <Link
          to={`/organization/${organization.id}`}
          style={{ textDecoration: "none", display: "block" }}
          key={key}
          state={{ id: organization.id, filter: filter }}
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

export default CityOrganizationsContainer;

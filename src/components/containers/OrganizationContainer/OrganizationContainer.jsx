import styles from "./styles.module.css";
// import organizations from "../../../Demo/Api/Organizations";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

import OrganizationCard from "../../elements/OrganizationCard/OrganizationCard";
import TabNavigation from "../TabNavigation/TabNavigation";

const OrganizationContainer = () => {
  const [organizationFilter, setOrganizationFilter] = useState("Portugal");
  const [organizations, setOrganizations] = useState([]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const fetchPost = async (country) => {
    await getDocs(collection(db, `organisations_${country.toLowerCase()}`)).then(
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setOrganizations(newData);
      }
    );
  };

  useEffect(() => {
    fetchPost(organizationFilter);
  }, []);

   const NavigationActive = (country) => {
    setOrganizationFilter(country);
    fetchPost(country);
  };

  return (
    <div className={styles.Organizations}>
      <TabNavigation click={NavigationActive} cityFilter={organizationFilter} />
      {organizations.map((organization, key) => (
        <Link
          to={`/organization/${organization.id}`}
          style={{ textDecoration: "none", display: "block" }}
          key={key}
          state={{ id: organization.id, filter: organizationFilter }}
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

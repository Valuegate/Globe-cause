import organizations from "../../../Demo/Api/Organizations";
import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import CityHeader from "../../../components/elements/CityHeader/CityHeader";
import AboutOrganization from "../../../components/containers/AboutOrganization/AboutOrganization";
import BackButton from "../../../components/elements/BackButton/BackButton";

const OrganizationDetail = () => {
  const location = useLocation();
  const [organization, setCity] = useState({});

  const organizationId = location.state.id;

 //console.log(organizationId);

  useEffect(() => {
    const organization = organizations.find((organization) => organization.id === organizationId);
    setCity(organization);
  }, [organizationId]);

  return (
    <div
      className={styles.CityDetail}
    >
      <CityHeader city='' country=''/>
      <AboutOrganization image={organization.image} description={organization.description} country={organization.country} name={organization.name} ratings={organization.id} />
      <BackButton color="#ffffff" to="/home" />
    </div>
  );
};

export default OrganizationDetail;

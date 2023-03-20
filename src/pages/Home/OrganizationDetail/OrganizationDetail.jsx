import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import styles from "./styles.module.css";

import CityHeader from "../../../components/elements/CityHeader/CityHeader";
import AboutOrganization from "../../../components/containers/AboutOrganization/AboutOrganization";
import BackButton from "../../../components/elements/BackButton/BackButton";

const OrganizationDetail = () => {
  const location = useLocation();
  const [organization, setCity] = useState([]);


  const organizationId = location.state.id;

 //console.log(organizationId);
  const fetchPost = async () => {
    await getDoc(doc(db, "organization_portugal", organizationId)).then(
      (querySnapshot) => {
        const newData = querySnapshot.data();
        setCity(newData);
        // console.log(newData);
      }
    );
  };

   useEffect(() => {
    fetchPost();
  }, []);

   useEffect(() => {
  }, [organizationId]);
  return (
    <div
      className={styles.CityDetail}
       style={{ backgroundImage: `url(${organization.main_image_link})` }}
    >
      <CityHeader city='' country=''/>
      <AboutOrganization image={organization.main_image_link} description={organization.short_description} country={organization.city} name={organization.name} ratings={organization.id} />
      <BackButton color="#ffffff" to="/home" />
    </div>
  );
};

export default OrganizationDetail;

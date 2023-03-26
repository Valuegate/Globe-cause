// import organizations from "../../../Demo/Api/Organizations";
import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";

import CityHeader from "../../../components/elements/CityHeader/CityHeader";
import AboutOrganization from "../../../components/containers/AboutOrganization/AboutOrganization";
import BackButton from "../../../components/elements/BackButton/BackButton";

const OrganizationDetail = () => {
  const location = useLocation();
  const [organization, setOrganization] = useState({});

  const filter = location.state?.filter;

  const organizationId = location.state?.id;

  //console.log(organizationId);

  const fetchPost = async () => {
    await getDoc(doc(db, `organisations_${filter.toLowerCase()}`, organizationId)).then(
      (querySnapshot) => {
        const newData = querySnapshot.data();
        setOrganization(newData);
      }
    );
  };

  useEffect(() => {
    fetchPost();
  }, []);
   useEffect(() => {
    // const city = cities.find((city) => city.id === cityId);
    // setCity(city);
  }, [organizationId]);
  return (
    <div
      className={[styles.CityDetail]}
      style={{ backgroundImage: `url(${organization?.cover_image})` }}
    >
      <CityHeader city="" country="" />
      <AboutOrganization
        image={organization?.cover_image}
        description={organization?.short_description}
        country={"Portugal"}
        name={organization?.name}
        ratings={organization?.id}
      />
      <BackButton color="#ffffff" />
    </div>
  );
};

export default OrganizationDetail;

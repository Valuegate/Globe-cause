// import organizations from "../../../Demo/Api/Organizations";
import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import CityHeader from "../../../components/elements/CityHeader/CityHeader";
import AboutOrganization from "../../../components/containers/AboutOrganization/AboutOrganization";
import BackButton from "../../../components/elements/BackButton/BackButton";
import Nav from "../Nav";


const OrganizationDetail = () => {
  const location = useLocation();
  const [organization, setOrganization] = useState({});

  const filter = location.state?.filter;

  const organizationId = location.state?.id;

  //console.log(organizationId);

  const fetchPost = async () => {
    await getDoc(
      doc(db, `organisations_${filter?.toLowerCase()}`, organizationId)
    ).then((querySnapshot) => {
      const newData = querySnapshot.data();
      setOrganization(newData);
      console.log(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, [organizationId]);

  return (
    <div
      className={[styles.CityDetail]}
      // style={{ backgroundImage: `url(${organization?.cover_image})` }}
    >
      <Nav/>
      <CityHeader city="" country="" />
      <AboutOrganization
        image={organization?.cover_image}
        description={organization?.short_description}
        country={organization?.name}
        name={organization?.city}
        ratings={organization?.id}
        ids={organizationId}
        email={organization?.email}
        facebook={organization?.facebook}
        web={organization?.website}
        twitter={organization?.twitter}
        phone={organization?.phone}
        filter={filter}
        linkedin={organization?.linkedIn}
      />
      <button
        className={styles.BackButton}
        onClick={() => window.history.back()}
      >
        <ArrowBackIosIcon />
      </button>
    </div>
  );
};

export default OrganizationDetail;

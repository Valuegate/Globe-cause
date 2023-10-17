// import cities from "../../../Demo/Api/Cities";
import styles from "./styles.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import CityHeader from "../../../components/elements/CityHeader/CityHeader";
import AboutCity from "../../../components/containers/AboutCity/AboutCity";
import BackButton from "../../../components/elements/BackButton/BackButton";
import Nav from "../Nav";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const CityDetail = ({ color }) => {
  const location = useLocation();
  const [city, setCity] = useState([]);
  const navigate = useNavigate();

  const cityId = location.state?.id;
  const filter = location.state?.filter;

  const fetchPost = async () => {
    await getDoc(doc(db, `locations_${filter?.toLowerCase()}`, cityId))
      .then((querySnapshot) => {
        const newData = querySnapshot.data();
        setCity(newData);

        // console.log("Getting here", querySnapshot.data());
      })
      .catch((err) => {
        console.log("An error occured", err);
      });
  };

  useEffect(() => {
    fetchPost();
  }, [cityId]);

 

  const goBack = () => navigate(-1);

  return (
    <div className={styles.CityDetail}>
      <Nav />
      {city ? (
        <>
          {" "}
          <CityHeader city={city.city} country={city.country} />
          <AboutCity
            description={city.short_description}
            photos={city.photos_links}
            filter={filter}
            ids={cityId}
            lat={city?.coordinates?.lat}
            lng={city?.coordinates?.long}
            city={city?.city}
            livingCost={city?.living_cost}
            conditions={city?.conditions}
            socialLife={city?.social_life}
            ratings={city?.rating}
            connectivity={city?.connectivity}
            coordinates={city?.coordinates}
          />{" "}
        </>
      ) : (
        <p style={{ color: 'white' }}>City Not found, Please try again!</p>
      )}
      {/* <BackButton color="#ffffff" to={"/home"} /> */}

      <div
        onClick={goBack}
        style={{ textDecoration: "none", color: color }}
        className={styles.BackButton}
      >
        <ArrowBackIosIcon />
      </div>
    </div>
  );
};

export default CityDetail;

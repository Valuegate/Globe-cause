// import cities from "../../../Demo/Api/Cities";
import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import img from '../../../assets/banner.png'
import CityHeader from "../../../components/elements/CityHeader/CityHeader";
import AboutCity from "../../../components/containers/AboutCity/AboutCity";
import BackButton from "../../../components/elements/BackButton/BackButton";
import Nav from "../Nav";

const CityDetail = () => {
  
  const location = useLocation();
  const [city, setCity] = useState([]);

  const cityId = location.state?.id;
  const filter = location.state?.filter;

  const fetchPost = async () => {
    await getDoc(doc(db, `locations_${filter?.toLowerCase()}`, cityId)).then(
      (querySnapshot) => {
        const newData = querySnapshot.data();
        setCity(newData);
      }
    );
  };

  useEffect(() => {
    fetchPost();
  }, [cityId]);

  // useEffect(() => {
  //   // const city = cities.find((city) => city.id === cityId);
  //   // setCity(city);
  // }, [cityId]);

  return (
    <div
      className={styles.CityDetail}
      // style={{ backgroundImage: img }}
      // style={{ backgroundImage: `url(${city.main_image_link})` }}
    >
      <Nav/>
      {console.log(city)}
      <CityHeader city={city.city} country={city.country} />
      <AboutCity
        description={city.short_description}
        photos={city.photos_links}
        ratings={city?.rating}
        filter={filter}
        ids={cityId}
        lat = {city?.coordinates?.lat }
        lng = {city?.coordinates?.long }
      />
      <BackButton color="#ffffff"  />
    </div>
  );
};

export default CityDetail;

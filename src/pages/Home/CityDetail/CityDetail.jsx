import cities from "../../../Demo/Api/Cities";
import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import CityHeader from "../../../components/elements/CityHeader/CityHeader";
import AboutCity from "../../../components/containers/AboutCity/AboutCity";
import BackButton from "../../../components/elements/BackButton/BackButton";

const CityDetail = () => {
  const location = useLocation();
  const [city, setCity] = useState({});

  const cityId = location.state.id;

  // console.log(cityId);

  useEffect(() => {
    const city = cities.find((city) => city.id === cityId);
    setCity(city);
  }, [cityId]);

  return (
    <div
      className={styles.CityDetail}
      style={{ backgroundImage: `url(${city.image})` }}
    >
      <CityHeader city={city.name} country={city.country} />
      <AboutCity description="The Nature Conservancy is a global conservation organization. Our mission is to conserve the lands and waters on which all life depends."  ratings={city.ratings} />
      <BackButton color="#ffffff" to="/home" />
    </div>
  );
};

export default CityDetail;

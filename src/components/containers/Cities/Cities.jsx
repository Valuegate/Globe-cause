import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

import CityCard from "../../elements/CityCard/CityCard";
import styles from "./styles.module.css";
import TabNavigation from "../TabNavigation/TabNavigation";

// import cities from "../../../Demo/Api/Cities";

const Cities = () => {
  const [cityFilter, setCityFilter] = useState("Portugal");
  const [portugal, setPortugal] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, `locations_${cityFilter.toLowerCase()}`)).then(
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPortugal(newData);
        // console.log(countries[0]?.countriesList[0]);
      }
    );
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const filterCities = (city) => {
    setCityFilter(city);
  };

  const NavigationActive = (country) => {
    setCityFilter(country);
    fetchPost();
  };

  return (
    <div className={styles.Cities}>
      <TabNavigation click={NavigationActive} cityFilter={cityFilter} />
      <div className={styles.CitiesContainer}>
        {portugal.map((city, key) => (
          <Link
            to={`/city/${city.id}`}
            style={{ textDecoration: "none" }}
            key={key}
            state={{ id: city.id }}
          >
            <CityCard city={city} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cities;

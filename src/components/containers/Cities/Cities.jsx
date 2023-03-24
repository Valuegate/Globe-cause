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
  const [cities, setCities] = useState([]);

  const fetchPost = async (country) => {
    await getDocs(collection(db, `locations_${country.toLowerCase()}`)).then(
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCities(newData);
        // console.log(countries[0]?.countriesList[0]);
      }
    );
  };

  useEffect(() => {
    fetchPost(cityFilter);
  }, []);

  // const filterCities = (city) => {
  //   setCityFilter(city);
  // };

  const NavigationActive = (country) => {
    setCityFilter(country);
    fetchPost(country);
    console.log("NavigationActive", country);
  };

  return (
    <div className={styles.Cities}>
      <TabNavigation click={NavigationActive} cityFilter={cityFilter} />
      <div className={styles.CitiesContainer}>
        {cities.map((city, key) => (
          <Link
            to={`/city/${city.id}`}
            style={{ textDecoration: "none" }}
            key={key}
            state={{ id: city.id, filter: cityFilter }}
          >
            <CityCard city={city} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cities;

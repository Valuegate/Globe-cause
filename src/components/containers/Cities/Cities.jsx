import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

import CityCard from "../../elements/CityCard/CityCard";
import styles from "./styles.module.css";
import TabNavigation from "../TabNavigation/TabNavigation";



const Cities = ({ filter }) => {
  const [cityFilter, setCityFilter] = useState("Portugal");
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchCities = (city) => {
    if (city === "") {
      return cities.sort((a, b) => a - b);
    }
    return cities.filter((cityItem) => {
      const cityName = cityItem.city?.toLowerCase();

      return cityName.includes(city.toLowerCase())
        ? cityItem
        : null;
    });
  };

  const fetchPost = async (country) => {
    await getDocs(collection(db, `locations_${country.toLowerCase()}`)).then(
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCities(
          Array.from(newData)?.sort((a, b) => (a.city > b.city ? 1 : -1))
        );
        setLoading(true);
      }
    );
  };

  useEffect(() => {
    fetchPost(cityFilter);
  }, []);

  const NavigationActive = (country) => {
    setCityFilter(country);
    fetchPost(country);
  };

  return (
    <div className={styles.Cities}>
      <TabNavigation click={NavigationActive} cityFilter={cityFilter} />
      <div className={styles.CitiesContainer}>
        {searchCities(filter)
          .sort()
          .map((city, key) => (
            <Link
              to={`/city/${city.id}`}
              style={{ textDecoration: "none" }}
              key={key}
              state={{ id: city.id, filter: cityFilter, city: city.city }}
            >
              <CityCard city={city} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Cities;

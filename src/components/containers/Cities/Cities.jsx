import { Link } from "react-router-dom";
import { useState } from "react";
import CityCard from "../../elements/CityCard/CityCard";
import styles from "./styles.module.css";
import TabNavigation from "../TabNavigation/TabNavigation";

import cities from "../../../Demo/Api/Cities";

const Cities = () => {
  const [cityFilter, setCityFilter] = useState("All");

  const filterCities = (city) => {
    if (cityFilter === "All") {
      return true;
    } else {
      return city.country === cityFilter;
    }
  };

  const NavigationActive = (country) => {
    setCityFilter(country);
  };

  return (
    <div className={styles.Cities}>
      <TabNavigation click={NavigationActive} cityFilter={cityFilter} />
      <div className={styles.CitiesContainer}>
        {cities.map(
          (city, key) =>
            filterCities(city) && (
              <Link
                to={`/city/${city.id}`}
                style={{ textDecoration: "none" }}
                key={key}
                state={{ id: city.id }}
              >
                <CityCard city={city} />
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default Cities;

import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import CityCard from "../../elements/CityCard/CityCard";
import styles from "./styles.module.css";
import TabNavigation from "../TabNavigation/TabNavigation";

// Mock data
const mockCities = [
  { city: "Lagos", id: "1", population: 15000000 },
  { city: "Abuja", id: "2", population: 3000000 },
  { city: "Kaduna", id: "3", population: 800000 },
];

const Cities = ({ filter }) => {
  const [cityFilter, setCityFilter] = useState("Lagos");
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  let getfilter = searchParams.get("filter");

  useEffect(() => {
    setCityFilter(getfilter || "Lagos");
    fetchPost(getfilter || "Lagos");
  }, [getfilter]);

  const searchCities = (city) => {
    if (!city) return cities;
    return cities.filter((cityItem) =>
      cityItem.city?.toLowerCase().includes(city.toLowerCase())
    );
  };

  const fetchPost = async (country) => {
    try {
      // Simulate fetching data
      const filteredCities = mockCities.filter(
        (city) => city.city.toLowerCase() === country.toLowerCase()
      );
      setCities(filteredCities);
    } catch (error) {
      console.error("Error fetching cities:", error);
      setCities([]);
    } finally {
      setLoading(true);
    }
  };

  const NavigationActive = (country) => {
    setCityFilter(country);
    fetchPost(country);
    setSearchParams({ filter: country });
  };

  return (
    <div className={styles.Cities}>
      <TabNavigation click={NavigationActive} cityFilter={cityFilter} />
      <div className={styles.CitiesContainer}>
        {loading ? (
          searchCities(filter).sort().map((city, key) => (
            <Link
              to={`/city/${city.id}`}
              style={{ textDecoration: "none" }}
              key={key}
              state={{ id: city.id, filter: cityFilter, city: city.city }}
            >
              <CityCard city={city} />
            </Link>
          ))
        ) : (
          <p>Loading cities...</p>
        )}
      </div>
    </div>
  );
};

export default Cities;

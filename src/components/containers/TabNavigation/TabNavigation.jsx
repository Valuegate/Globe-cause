import styles from "./styles.module.css";

import { useState, useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

import countries from "../../../Demo/Api/Countries";

import TabNavigationButton from "../../elements/TabNavigationButton/TabNavigationButton";

const TabNavigation = ({ click, country, cityFilter }) => {
  const [countries, setCountries] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "countries")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCountries(newData);
      // console.log(countries, newData[0].countriesList);
      // console.log(countries[0]?.countriesList[0]);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className={styles.TabNavigation}>
      {countries.map((country, key) =>
        country.countriesList.map((country, key) => (
          <TabNavigationButton
            text={country}
            key={key}
            onClick={click}
            bg={country === cityFilter ? "#1F4490" : "#FFFFFF"}
            color={country === cityFilter ? "#FFFFFF" : "#1F4490"}
          />
        ))
      )}
    </div>
  );
};

export default TabNavigation;

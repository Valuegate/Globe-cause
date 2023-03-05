import styles from "./styles.module.css";

import countries from "../../../Demo/Api/Countries";

import TabNavigationButton from "../../elements/TabNavigationButton/TabNavigationButton";

const TabNavigation = ({ click, country, cityFilter }) => {
  return (
    <div className={styles.TabNavigation}>
      {countries.map((country, key) => (
        <TabNavigationButton
          text={country.name}
          key={key}
          onClick={click}
          bg={country.name === cityFilter ? "#1F4490" : "#FFFFFF"}
          color={country.name === cityFilter ? "#FFFFFF" : "#1F4490"}
        />
      ))}
    </div>
  );
};

export default TabNavigation;

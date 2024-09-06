import styles from "./styles.module.css";
import React from "react";
import TabNavigationButton from "../../elements/TabNavigationButton/TabNavigationButton";

// Static list of states (or areas) for NGOs
const ngoStates = ["Lagos", "Abuja", "Kaduna"];

const TabNavigation = ({ click, ngoFilter }) => {
  return (
    <div className={styles.TabNavigation}>
      {ngoStates.map((state, key) => (
        <TabNavigationButton
          text={state}
          key={key}
          onClick={() => click(state)}
          bg={state === ngoFilter ? "#541A46" : "#FCFCFC"}
          color={state === ngoFilter ? "#FCFCFC" : "#541A46"}
        />
      ))}
    </div>
  );
};

export default TabNavigation;

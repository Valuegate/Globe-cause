import React from "react";
import styles from "./styles.module.css";
import navigation from "../../../Demo/More/navigation";

import TabNavigationButton from "../../elements/TabNavigationButton/TabNavigationButton";

const SecondaryTabNavigation = ({ onClick, tab }) => {
  return (
    <div className={styles.SecondaryTabNavigation}>
      {navigation.map((item, index) => {
        return (
          <TabNavigationButton
            text={item.name}
            key={index}
            onClick={onClick}
            bg={item.name === tab ? "#1F4490" : "#FFFFFF"}
            color={item.name === tab ? "#FFFFFF" : "#1F4490"}
          />
        );
      })}
    </div>
  );
};

export default SecondaryTabNavigation;

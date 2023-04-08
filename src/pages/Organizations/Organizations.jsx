import styles from "./styles.module.css";
import { useState } from "react";

import BottomNavigation from "../../components/containers/BottomNavigation/BottomNavigation";
import NavigationButton from "../../components/elements/NavigationButton/NavigationButton";
import Search from "../../components/elements/Search/Search";
import HeaderText from "../../components/elements/HeaderText/HeaderText";
import OrganizationContainer from "../../components/containers/OrganizationContainer/OrganizationContainer";

const Organizations = () => {
  const [navigationState, setNavigationState] = useState(0);
  const [filter, setFilter] = useState("");


  const bottomNavigation = () => {
    setNavigationState(!navigationState);
  };
  return (
    <div className={styles.Organizations}>
      <HeaderText text="Organizations" />
      <Search setFilter={setFilter} />
      {/* <TabNavigation /> */}
      <OrganizationContainer filter={filter} />
      <BottomNavigation navigationState={navigationState} />
      <NavigationButton
        onClick={bottomNavigation}
        navigationState={navigationState}
      />
    </div>
  );
};

export default Organizations;

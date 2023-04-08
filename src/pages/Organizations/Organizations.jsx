import styles from "./styles.module.css";
import { useState } from "react";

import BottomNavigation from "../../components/containers/BottomNavigation/BottomNavigation";
import NavigationButton from "../../components/elements/NavigationButton/NavigationButton";
import Search from "../../components/elements/Search/Search";
import HeaderText from "../../components/elements/HeaderText/HeaderText";
import OrganizationContainer from "../../components/containers/OrganizationContainer/OrganizationContainer";
import { useTranslation } from "react-i18next";

const Organizations = () => {
  const [filter, setFilter] = useState("");
  const { t } = useTranslation();

  const [navigationState, setNavigationState] = useState(0);

  const bottomNavigation = () => {
    setNavigationState(!navigationState);
  };
  return (
    <div className={styles.Organizations}>
      <HeaderText text={t("Example.2")} />
      <Search setFilter={setFilter} />
      {/* <TabNavigation /> */}
      <OrganizationContainer />
      <BottomNavigation navigationState={navigationState} />
      <NavigationButton onClick={bottomNavigation} />
    </div>
  );
};

export default Organizations;

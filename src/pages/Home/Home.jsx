import React, { useState } from "react";
import styles from "./styles.module.css";
import NgoList from "../../components/ngo/NgoList/NgoList";
import BottomNavigation from "../../components/containers/BottomNavigation/BottomNavigation";
import NavigationButton from "../../components/elements/NavigationButton/NavigationButton";
import Intro from "../../components/elements/Intro/Intro";
import Search from "../../components/elements/Search/Search";
import Patners from "../../components/containers/Patners/Patners";
import Nav from "./Nav";
import Footer from "../../components/containers/Footer/Footer";

const Home = () => {
  const [navigationState, setNavigationState] = useState(0);
  const [filter, setFilter] = useState("");

  const bottomNavigation = () => {
    setNavigationState(!navigationState);
  };

  return (
    <>
    <div className={styles.Home}>
      <Nav />
      <Intro />
      <Search setFilter={setFilter} />
      <Patners />
      <NgoList filter={filter} />
      <BottomNavigation navigationState={navigationState} />
      <NavigationButton
        onClick={bottomNavigation}
        navigationState={navigationState}
      />
    </div>
      <Footer />
      </>
  );
};

export default Home;

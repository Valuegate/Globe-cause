import { useState } from "react";
// import { Link } from "react-router-dom";

import styles from "./styles.module.css";

import Intro from "../../components/elements/Intro/Intro";
import Search from "../../components/elements/Search/Search";
import Cities from "../../components/containers/Cities/Cities";
import BottomNavigation from "../../components/containers/BottomNavigation/BottomNavigation";

import NavigationButton from "../../components/elements/NavigationButton/NavigationButton";
import Patners from "../../components/containers/Patners/Patners";
// import SignInButton from "../../components/elements/SignInButton";

const Home = () => {
  const [navigationState, setNavigationState] = useState(0);

  const bottomNavigation = () => {
    setNavigationState(!navigationState);
  };

  return (
    <div className={styles.Home}>
      <Intro />
      <Search />
      <Patners/>
      <Cities />
      {/* <Link to="/login" style={{ textDecoration: "none" }}>
        <SignInButton />
      </Link> */}
      <BottomNavigation navigationState={navigationState} />
      <NavigationButton
        onClick={bottomNavigation}
        navigationState={navigationState}
      />
    </div>
  );
};

export default Home;

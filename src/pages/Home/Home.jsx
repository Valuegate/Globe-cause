// import React, { useState } from "react";


// import styles from "./styles.module.css";

// import Intro from "../../components/elements/Intro/Intro";
// import Search from "../../components/elements/Search/Search";
// import Cities from "../../components/containers/Cities/Cities";
// import BottomNavigation from "../../components/containers/BottomNavigation/BottomNavigation";

// import NavigationButton from "../../components/elements/NavigationButton/NavigationButton";
// import Patners from "../../components/containers/Patners/Patners";
// import Nav from "./Nav";


// const Home = () => {
//   const [navigationState, setNavigationState] = useState(0);
//   const [filter, setFilter] = useState("");

//   const bottomNavigation = () => {
//     setNavigationState(!navigationState);
//   };

//   return (
//     <div
//       className={styles.Home}
      
//     >
//       <Nav />
//       <Intro />
//       <Search setFilter={setFilter} />
//       <Patners />
//       <Cities filter={filter} />
//       <BottomNavigation navigationState={navigationState} />
//       <NavigationButton
//         onClick={bottomNavigation}
//         navigationState={navigationState}
//       />
      
//     </div>
//   );
// };

// export default Home;

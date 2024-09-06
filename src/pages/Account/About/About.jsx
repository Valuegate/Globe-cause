import React from "react";
import styles from "./styles.module.css";
import BackButton from "../../../components/elements/BackButton/BackButton";

import { useContext } from "react";
import { WebsiteThemeContext } from "../../../hooks/theme/WebsiteThemeContext";

const About = () => {
  const { theme } = useContext(WebsiteThemeContext);
  return (
    <div className={styles.Container}
      // style={
      //   theme === "default" || theme === "dark"
      //     ? { color: "#fff" }
      //     : { color: "rgb(25, 32, 43)" }
      // }
    >
      <div className={styles.HeaderContainer}>
        <BackButton color="#541A46" to="/account" />
        <p style={{ fontWeight: "700", textAlign: "center", fontSize: "20px" }}>
          About
        </p>
      </div>
      {/* <div className={styles.VideoResponsive}>
        <iframe
          src="https://sivolunteering.com/wp-content/uploads/2022/10/SIV.mp4"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      </div> */}
      <p style={{ fontSize: "14px", lineHeight: "2.15rem", fontWeight: "400" }}>
        <strong>Globe Cause</strong> is more than just a platform; it’s a global mission. The name "Globe Cause" merges two powerful concepts. 
        "Globe" represents the Earth, embodying a worldwide perspective and the importance of reaching across borders to connect volunteers with NGOs wherever they may be. 
        "Cause" stands for the purpose that drives action, particularly in the realms of social good and humanitarian endeavors. 
      </p>
      <p style={{ fontSize: "14px", lineHeight: "2.15rem", fontWeight: "400" }}>
        Together, these words encapsulate our mission: to unite people across the globe in support of meaningful causes. Whether it’s aiding local communities, supporting sustainable development, 
        or contributing to global humanitarian efforts, Globe Cause is here to bridge the gap between volunteers and the organizations that need them most. Our platform is dedicated to 
        fostering volunteerism, providing the resources, connections, and support necessary for impactful action.
      </p>
      <p style={{ fontSize: "14px", lineHeight: "2.15rem", fontWeight: "400" }}>
        The need for structured, reliable information has never been more evident, especially as the world navigates challenges like the COVID-19 pandemic. Volunteers must be equipped with 
        comprehensive insights into the communities they serve, understanding everything from local culture to logistics. Globe Cause addresses this need by ensuring that volunteers have 
        access to the most accurate and detailed information possible, helping to align their expectations with the realities of the field. 
      </p>
      <p style={{ fontSize: "14px", lineHeight: "2.15rem", fontWeight: "400" }}>
        Our commitment extends beyond just matching volunteers with NGOs; we aim to build a global network of support, where every volunteer action contributes to a broader impact. 
        Join us in our mission to make the world a better place, one cause at a time.
      </p>
    </div>
  );
};

export default About;

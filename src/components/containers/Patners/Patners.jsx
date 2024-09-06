import React from "react";
import styles from "./styles.module.css";

import { useContext } from "react";
import { WebsiteThemeContext } from "../../../hooks/theme/WebsiteThemeContext";

// const images = [pat1, pat2, pat3, pat4];
const partners = ["Partner1", "Partner2", "Partner3", "Partner4"];

const Patners = () => {
  const { theme } = useContext(WebsiteThemeContext);
  return (
    <div>
      <p
        className={styles.Heading}
        // style={
        //   theme === "dark" || theme === "default"
        //     ? { color: "#fff" }
        //     : { color: "rgb(25, 32, 43)" }
        // }
      >
        Proudly Collaborating With
      </p>
      <div className={styles.FlexContainer}>
        {/* {images.map((img, i) => { */}
           {/* return <img src={img} key={i} alt="" /> */}
          {partners.map((partner, i) => {
            return (
              <div
                key={i}
                style={{
                  color: theme === "dark" || theme === "default" ? "#541A46" : "#1F1246",
                  padding: "10px",
                  margin: "5px",
                  border: "2px solid",
                  borderRadius: "5px",
                  textAlign: "center",
                }}
              >
                {partner}
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Patners;

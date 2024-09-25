import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import style from "./styles.module.css";
import { Link } from "react-router-dom";
import { IoIosPerson } from "react-icons/io";

import { WebsiteThemeContext } from "../../hooks/theme/WebsiteThemeContext";
import Logo from "../../components/elements/Logo/Logo";

const Nav = () => {
  const { theme } = useContext(WebsiteThemeContext);
  const [userName, setUserName] = useState("Unknown");

  useEffect(() => {
    // Function to fetch profile data from the endpoint
    const fetchProfile = async () => {
      try {
        // Retrieve the token from local storage (or another source)
        const token = localStorage.getItem('token');

        if (!token) {
          console.error("No token found. User may not be authenticated.");
          return;
        }

        const response = await axios.get("https://scoutflair.top:8081/api/v1/profile/getProfile", {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the header
          },
        });
        
        // Assuming the user's name is in response.data.data.obj
        const name = response.data?.data?.obj?.name || "Unknown";
        setUserName(name);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  return (
    <div>
      <div className={style.NavContainer}>
        <div className={style.NavItems}>
          <div className={style.NavItem}>
            <Link to="/" target="_blank">
              <Logo />
            </Link>
          </div>
        </div>

        <div className={style.NavItems}>
          <div className={style.NavItems}>
            <Link
              to="/account"
              style={{
                display: "flex",
                textDecoration: "none",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                className={style.Ptag}
                style={
                  theme === "dark" || theme === "default"
                    ? { color: "#541A46" }
                    : { color: "#1F1246" }
                }
              >
                Welcome, {userName}
              </p>
              &nbsp;
              <IoIosPerson className={style.Notification} />
              &nbsp;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

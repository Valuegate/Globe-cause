import React, { useState, useEffect, useContext } from "react";
import { useUserAuth } from "../../hooks/auth/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { UserAthorizationContext } from "../../hooks/authorization/UserAuthorizationContext";
import { WebsiteThemeContext } from "../../hooks/theme/WebsiteThemeContext";
import axios from "axios"; // Add axios for API calls
import styles from "./styles.module.css";
import accountSettings from "../../Demo/More/accountSettings";
import BottomNavigation from "../../components/containers/BottomNavigation/BottomNavigation";
import NavigationButton from "../../components/elements/NavigationButton/NavigationButton";
import ProfilePicture from "../../components/elements/ProfilePicture/ProfilePicture";
import Label from "../../components/elements/Label/Label";
import HorizontalLine from "../../components/elements/HorizontalLine/HorizontalLine";
import AccountButton from "../../components/elements/AccountButton/AccountButton";
import LogoutButton from "../../components/elements/LogoutButton/LogoutButton";
import { Link } from "react-router-dom";

const Account = () => {
  const [navigationState, setNavigationState] = useState(0);
  const [userDetails, setUserDetails] = useState({});
  const { theme } = useContext(WebsiteThemeContext);
  useContext(UserAthorizationContext); // Get accessToken from context
  const { logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  const bottomNavigation = () => {
    setNavigationState(!navigationState);
  };

 // Function to fetch profile data
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
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Profile Data:", response.data); // Log the entire response
    const profile = response.data?.data?.obj;
    console.log("Profile Object:", profile); // Log the profile object
    setUserDetails(profile);
  } catch (error) {
    console.error("Error fetching profile data:", error);
  }
};
fetchProfile();
  }, []);

// Check if userDetails is being updated
useEffect(() => {
  console.log("Updated userDetails:", userDetails);
}, [userDetails]);

  return (
    <div
      className={styles.Account}
      style={
        theme === "default" || theme === "dark"
          ? { color: "#000" }
          : { color: "rgb(25, 32, 43)" }
      }
    >
      <Link
        to="/home"
        style={
          theme === "default" || theme === "dark"
            ? {
                textDecoration: "none",
                color: "#541A46",
                position: "fixed",
                top: "20px",
                left: "20px",
                border: "2px solid #541A46",
                padding: "5px 10px",
                borderRadius: "10px",
              }
            : {
                textDecoration: "none",
                color: "rgb(25, 32, 43)",
                position: "fixed",
                top: "20px",
                left: "20px",
                border: "1px solid rgb(25, 32, 43)",
                padding: "5px 10px",
                borderRadius: "10px",
              }
        }
        className={styles.AditionalButton}
      >
        <p>Home</p>
      </Link>
      <ProfilePicture profile_image={userDetails?.profile_image_url} />
      <Label
        color={theme === "default" || theme === "dark" ? "#1F1246" : "#541A46"}
        text={userDetails?.first_name || userDetails?.name || "Your Name"}
      />
      <p
        style={
          theme === "default" || theme === "dark"
            ? { color: "#541A46", marginTop: "-15px" }
            : { color: "#1F1246", marginTop: "-15px" }
        }
      >
        {userDetails?.email_address || userDetails?.email || "Your Email"}
      </p>
      <HorizontalLine width="80%" />
      <BottomNavigation navigationState={navigationState} />
      <NavigationButton
        onClick={bottomNavigation}
        navigationState={navigationState}
      />
      {accountSettings.map((item, key) => {
        if (item.title === "Logout") {
          return (
            <LogoutButton key={key} text={item.title} onClick={handleLogout} />
          );
        } else {
          return (
            <AccountButton
              key={key}
              text={item.title}
              icon={item.icon}
              onClick={() => console.log("clicked")}
              to={item.link}
            >
              <item.icon />
            </AccountButton>
          );
        }
      })}
    </div>
  );
};

export default Account;

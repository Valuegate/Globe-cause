import React, { useState, useEffect, useContext } from "react";
import { useUserAuth } from "../../hooks/auth/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { UserAthorizationContext } from "../../hooks/authorization/UserAuthorizationContext";
import { WebsiteThemeContext } from "../../hooks/theme/WebsiteThemeContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
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
  const [userDetails, setUserDetails] = useState([]);
  const { theme } = useContext(WebsiteThemeContext);
  const { role } = useContext(UserAthorizationContext);
  const { logOut, user } = useUserAuth();
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

  const fetchPost = async (id, database) => {
    try {
      const querySnapshot = await getDoc(doc(db, database, id));
      const newData = querySnapshot.data();
      setUserDetails(newData);
    } catch (error) {
      console.error("Error fetching document: ", error);
    }
  };

  // Extract complex expression to variable
  const uid = user?.uid;

  useEffect(() => {
    if (uid) {
      if (role === "volunteer") {
        fetchPost(uid, "volunteers");
      } else {
        fetchPost(uid, `organisations_${role}`);
      }
    }
  }, [role, uid]);

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
        color={
          theme === "default" || theme === "dark" ? "#1F1246" : "#541A46"
        }
        text={userDetails?.name || "Your Name"}
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

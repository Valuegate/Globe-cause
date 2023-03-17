import { useState } from "react";
import { useUserAuth } from "../../hooks/auth/UserAuthContext";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";
import accountSettings from "../../Demo/More/accountSettings";
import photo from "../../assets/myPhoto.JPG";

import BottomNavigation from "../../components/containers/BottomNavigation/BottomNavigation";
import NavigationButton from "../../components/elements/NavigationButton/NavigationButton";
import ProfilePicture from "../../components/elements/ProfilePicture/ProfilePicture";
import Label from "../../components/elements/Label/Label";
import HorizontalLine from "../../components/elements/HorizontalLine/HorizontalLine";
import AccountButton from "../../components/elements/AccountButton/AccountButton";
import LogoutButton from "../../components/elements/LogoutButton/LogoutButton";

const Account = () => {
  const [navigationState, setNavigationState] = useState(0);

  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const bottomNavigation = () => {
    setNavigationState(!navigationState);
  };
  return (
    <div className={styles.Account}>
      <ProfilePicture src={photo} />
      <Label text="Musaddiq Yerima Askira" />
      <p style={{ marginTop: "-15px" }}>musaddiqaskira@gmail.com</p>
      <HorizontalLine width="80%" />
      <BottomNavigation navigationState={navigationState} />
      <NavigationButton onClick={bottomNavigation} />

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

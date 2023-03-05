import { useState } from "react";
import styles from "./styles.module.css";
import accountSettings from "../../Demo/More/accountSettings";
import photo from "../../assets/myPhoto.JPG";

import BottomNavigation from "../../components/containers/BottomNavigation/BottomNavigation";
import NavigationButton from "../../components/elements/NavigationButton/NavigationButton";
import ProfilePicture from "../../components/elements/ProfilePicture/ProfilePicture";
import Label from "../../components/elements/Label/Label";
import HorizontalLine from "../../components/elements/HorizontalLine/HorizontalLine";
import AccountButton from "../../components/elements/AccountButton/AccountButton";

const Account = () => {
  const [navigationState, setNavigationState] = useState(0);

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
        return (
          <AccountButton text={item.title} key={key} to={item.link}>
            <item.icon />
          </AccountButton>
        );
      })}
    </div>
  );
};

export default Account;

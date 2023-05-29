import { useState, useEffect } from "react";
import { useUserAuth } from "../../hooks/auth/UserAuthContext";
import { useNavigate } from "react-router-dom";

//authorization context
import { useContext } from "react";
import { UserAthorizationContext } from "../../hooks/authorization/UserAuthorizationContext";

import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

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
  const [userDetails, setUserDetails] = useState([]);

  //authorization context
  const { role, setRole } = useContext(UserAthorizationContext);

  const { logOut, user } = useUserAuth();

  console.log(user?.uid);

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

  const fetchPost = async (id, database) => {
    await getDoc(doc(db, database, id)).then((querySnapshot) => {
      const newData = querySnapshot.data();
      setUserDetails(newData);
      console.log("this is the user details", userDetails);
    });
  };

  useEffect(() => {
    if (role === "volunteer") {
      fetchPost(user?.uid, "volunteers");
    } else {
      fetchPost(user?.uid, `organisations_${role}`);
    }
    console.log(role);
  }, [role]);

  return (
    <div className={styles.Account}>
      <ProfilePicture profile_image={userDetails?.profile_image_url} />
      <Label text={userDetails?.name || "Your Name"} />
      <p style={{ marginTop: "-15px" }}>
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

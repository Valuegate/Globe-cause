import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import BottomNavigationText from "../../elements/BottomNavigationText/BottomNavigationText";
import { AiOutlineHome } from "react-icons/ai";
import { VscOrganization } from "react-icons/vsc";
import { RiCommunityLine } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";

import { useContext } from "react";
import { UserAthorizationContext } from "../../../hooks/authorization/UserAuthorizationContext";

const BottomNavigation = ({ navigationState }) => {
  const { role } = useContext(UserAthorizationContext);

  if (navigationState) {
    return (
      <div className={[styles.BottomNavigation]}>
        <Link
          to="/home"
          style={{
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={styles.Icon}>
            <AiOutlineHome size={28} color={"#0E0E0F"} />
          </div>
          <BottomNavigationText text="Home" />
        </Link>
        <Link to="/organizations" style={{ textDecoration: "none" }}>
          <div className={styles.Icon}>
            <RiCommunityLine size={28} color={"#0E0E0F"} />
          </div>
          <BottomNavigationText text="Organizations" />
        </Link>
        {role !== "volunteer" && (
          <Link to="/community" style={{ textDecoration: "none" }}>
            <div className={styles.Icon}>
              <VscOrganization size={28} color={"#0E0E0F"} />
            </div>
            <BottomNavigationText text="Community" />
          </Link>
        )}
        <Link to="/account" style={{ textDecoration: "none" }}>
          <div className={styles.Icon}>
            <MdOutlineAccountCircle size={28} color={"#0E0E0F"} />
          </div>
          <BottomNavigationText text="Account" />
        </Link>
      </div>
    );
  } else {
    return <div className={styles.BottomNavigationHide}></div>;
  }
};

export default BottomNavigation;

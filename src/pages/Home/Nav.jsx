import React, { useContext } from "react";
import style from "./styles.module.css";
import { Link } from "react-router-dom";
import { IoIosPerson } from "react-icons/io";

import { NameContext } from "../../hooks/name/NameContext";
import { WebsiteThemeContext } from "../../hooks/theme/WebsiteThemeContext";
import Logo from "../../components/elements/Logo/Logo";

const Nav = () => {
  const { theme } = useContext(WebsiteThemeContext);
  const { name } = useContext(NameContext);
  return (
    <div>
      <div className={style.NavContainer}>
        <div className={style.NavItems}>
          <div className={style.NavItem}>
            <Link
              targer="_blank"
              to="/"
            >
              <Logo />
            </Link>
          </div>
          {/* <img src={logo} alt="" /> */}
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
                Welcome, {name || "Unkown"}
              </p>
              &nbsp;
              <IoIosPerson
                className={style.Notification}
              />
              &nbsp;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

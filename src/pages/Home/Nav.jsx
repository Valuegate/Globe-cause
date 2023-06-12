import React, { useContext } from "react";
import style from "./styles.module.css";
import logo from "../../assets/logo-siv.svg";
import { Link } from "react-router-dom";
import { IoIosPerson } from "react-icons/io";

import { NameContext } from "../../hooks/name/NameContext";

const Nav = () => {
  const { name } = useContext(NameContext);
  return (
    <div>
      <div className={style.NavContainer}>
        <div className={style.NavItems}>
          <div className={style.NavItem}>
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              targer="_blank"
              to="https://sivolunteering.com/"
            >
              Project Website
            </Link>
          </div>
          <img src={logo} alt="" />
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
              <p className={style.Ptag}>Hello, {name || "Unkown"}</p>
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

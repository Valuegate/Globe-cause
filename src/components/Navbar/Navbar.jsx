/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2"; // Use HiOutlineXMark instead
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

import styles from "./Navbar.module.css";
import Logo from "../elements/Logo/Logo";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  
  const menuOptions = [
    {
      text: "About",
      icon: <InfoIcon />,
      path: "/about",
    },
    {
      text: "Sign In",
      icon: <LoginIcon />,
      path: "/login",
    },
    {
      text: "Register",
      icon: <AppRegistrationIcon />,
      path: "/signup",
    },
  ];

  return (
    <nav className={styles.Navbar}>
      {/* Logo Section */}
      <div className={styles.NavLogo}>
        <Link to="/" className={styles.LogoLink}>
          <Logo />
        </Link>
      </div>

      {/* Desktop Links */}
      <ul className={styles.NavLinks}>
        <li>
          <Link to="/account/about" className={styles.NavLink}>
            About
          </Link>
        </li>
        {/* <li>
          <Link to="/contact" className={styles.NavLink}>
            Contact
          </Link>
        </li> */}
      </ul>

      {/* Cart and User Icons */}
      <div className={styles.NavIcons}>
        <Link to="/login" className={styles.NavIconLink}>
          <button className={styles.signInButton}>Sign In</button>
        </Link>
        <Link to="/signup" className={styles.NavIconLink}>
         <button className={styles.signUpButton}>Sign Up</button>
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className={styles.MobileMenuIcon}>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          {/* Drawer Header */}
          <div className={styles.DrawerHeader}>
            <HiOutlineXMark onClick={() => setOpenMenu(false)} className={styles.CloseIcon} /> {/* Updated icon */}
          </div>
          <Divider />
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavbarLink.module.css";

const NavbarLink = (props) => {
  return (
    <li>
      <NavLink className={(navData) => (navData.isActive ? styles.active : "")} to={props.path}>
        {props.title}
      </NavLink>
    </li>
  );
};

export default NavbarLink;

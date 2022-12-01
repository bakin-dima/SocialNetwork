import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavbarLink.module.css";

const NavbarLink = (props) => {
  return (
    <li>
      <NavLink className={(navData) => (navData.isActive ? styles.active : "")} to={props.path}>
        <img src={require(`../../../assets/images/${props.title}.svg`)} alt={props.title} />
        <span>{props.title}</span>
      </NavLink>
    </li>
  );
};

export default NavbarLink;

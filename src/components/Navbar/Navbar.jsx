import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => (
  <nav className={styles.nav}>
    <ul>
      <li>
        <NavLink className={(navData) => (navData.isActive ? styles.active : "")} to="/profile">
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink className={(navData) => (navData.isActive ? styles.active : "")} to="/dialogs">
          Messages
        </NavLink>
      </li>
      <li>
        <NavLink className={(navData) => (navData.isActive ? styles.active : "")} to="/news">
          News
        </NavLink>
      </li>
      <li>
        <NavLink className={(navData) => (navData.isActive ? styles.active : "")} to="/music">
          Music
        </NavLink>
      </li>
      <li>
        <NavLink className={(navData) => (navData.isActive ? styles.active : "")} to="settings">
          Settings
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;

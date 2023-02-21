import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "../common/Avatar/Avatar";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="https://freesvg.org/img/1665403299ninja-fighter-with-a-sword.png" alt=""></img>

      <h2>ReactJS Study Project</h2>

      {props.isAuth ? (
        <div className={styles.loginBlock}>
          <span>Hello {props.login}</span>
          <button onClick={props.logout}>log out</button>
        </div>
      ) : (
        <NavLink to={"login/"}>Login</NavLink>
      )}
    </header>
  );
};

export default Header;

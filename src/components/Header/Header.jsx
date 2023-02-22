import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "../common/Avatar/Avatar";
import styles from "./Header.module.scss";
import Button from "../common/Button/Button";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <h2>ReactJS Study Project</h2>

      {props.isAuth ? (
        <div className={styles.login}>
          <span className={styles.title}>
            Hello <b>{props.login}</b>
          </span>
          <Button title="log out" action={props.logout} />
          {/* <button onClick={props.logout}>log out</button> */}
        </div>
      ) : (
        <NavLink to={"login/"}>
          <Button title="login" />
        </NavLink>
      )}
    </header>
  );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import user_avatar_placeholder from "../../assets/images/user_avatar_placeholder.png";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src="https://freesvg.org/img/1665403299ninja-fighter-with-a-sword.png" alt=""></img>

      <h2>ReactJS Study Project</h2>
      <div className={styles.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"login/"}>Login</NavLink>}
        {props.currentUser ? <img src={props.currentUser.photos.small !== null ? props.currentUser.photos.small : user_avatar_placeholder} alt="User Avatar" /> : ""}
      </div>
    </header>
  );
};

export default Header;

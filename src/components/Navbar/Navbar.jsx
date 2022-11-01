import React from "react";
import { NavLink } from "react-router-dom";
import NavbarLink from "./NavbarLink/NavbarLink";
import NavbarFriend from "./NavbarFriend/NavbarFriend";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  let linkItems = props.sidebar.linksList.map((link) => <NavbarLink title={link.linkTitle} path={link.linkPath} />);
  let FriendsItems = props.sidebar.friendsList.map((friend) => <NavbarFriend {...friend} />);
  return (
    <nav className={styles.nav}>
      <ul>{linkItems}</ul>
      <div className={styles.friendList}>{FriendsItems}</div>
    </nav>
  );
};

export default Navbar;

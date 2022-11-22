import React from "react";
import NavbarLink from "./NavbarLink/NavbarLink";
import NavbarFriend from "./NavbarFriend/NavbarFriend";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  let linkItems = props.sidebar.linksList.map((link) => <NavbarLink title={link.linkTitle} path={link.linkPath} key={link.id} />);
  let FriendsItems = props.sidebar.friendsList.map((friend) => <NavbarFriend {...friend} key={friend.id} />);
  return (
    <nav className={styles.nav}>
      <ul>{linkItems}</ul>
      <div className={styles.friendList}>{FriendsItems}</div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import NavbarLink from "./NavbarLink/NavbarLink";
import NavbarFriend from "./NavbarFriend/NavbarFriend";
import styles from "./Navbar.module.scss";

const Navbar = ({ linksList, followedUsers, isAuth, unfollow, ...props }) => {
  let linkItems = linksList.map((link) => <NavbarLink title={link.linkTitle} path={link.linkPath} key={link.id} />);
  let FriendsItems = followedUsers.map((user) => <NavbarFriend user={user} unfollow={unfollow} key={user.id} />);
  return (
    <nav className={styles.nav}>
      <ul>{linkItems}</ul>
      {isAuth && <div className={styles.friendList}>{FriendsItems}</div>}
    </nav>
  );
};

export default Navbar;

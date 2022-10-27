import React from "react";
import styles from "./NavbarFriend.module.css";

const NavbarFriend = (props) => {
  let friendName = props.friendFirstName + " " + props.friendLastName;

  return (
    <div className={styles.friend}>
      <img src={props.friendAvatar} alt="Avatar" />
      <span>{friendName}</span>
    </div>
  );
};

export default NavbarFriend;

import React from "react";
import { unfollow } from "../../../redux/usersReducer";
import { Avatar } from "../../common/Avatar/Avatar";
import styles from "./NavbarFriend.module.css";

const NavbarFriend = ({ user, unfollow, ...props }) => {
  return (
    <div className={styles.friend}>
      <Avatar path={user.photos.small} elementStyle={styles.friendAvatar} />
      <div className={styles.userName}>
        <span>{user.name}</span>
        <button
          onClick={() => {
            unfollow(user.id);
          }}
        >
          unfollow
        </button>
      </div>
    </div>
  );
};

export default NavbarFriend;

import React from "react";
import { unfollow } from "../../../redux/usersReducer";
import Avatar from "../../common/Avatar/Avatar";
import styles from "./NavbarFriend.module.scss";
import Button from "../../common/Button/Button";

const NavbarFriend = ({ user, unfollow, ...props }) => {
  return (
    <div className={styles.friend}>
      <div className={styles.description}>
        <Avatar path={user.photos.small} elementStyle={styles.avatar} />
        <span>{user.name}</span>
      </div>

      <div className={styles.unfollow}>
        <Button
          animation={false}
          title="unfollow"
          action={() => {
            unfollow(user.id);
          }}
        />
      </div>
    </div>
  );
};

export default NavbarFriend;

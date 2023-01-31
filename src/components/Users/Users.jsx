import React from "react";
import styles from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props }) => {
  return (
    <div>
      <Paginator currentPage={currentPage} pageSize={pageSize} totalUsersCount={totalUsersCount} onPageChanged={onPageChanged} />

      <div className={styles.users}>
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            followingInProgress={props.followingInProgress}
            follow={props.follow}
            unfollow={props.unfollow}
            isAuth={props.isAuth}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;

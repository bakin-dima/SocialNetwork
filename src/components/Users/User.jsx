import React from "react";
import styles from "./Users.module.scss";
import { NavLink } from "react-router-dom";
import Avatar from "../common/Avatar/Avatar";

let User = ({ user, followingInProgress, unfollow, follow, ...props }) => {
  return (
    <div className={styles.user}>
      <div className={styles.image}>
        <NavLink to={"/profile/" + user.id}>
          <Avatar path={user.photos.small} elementStyle={styles.avatar} />
        </NavLink>

        {props.isAuth && (
          <div>
            {user.followed ? (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                className={styles.follow}
                onClick={() => {
                  unfollow(user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                className={styles.unfollow}
                onClick={() => {
                  follow(user.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        )}
      </div>
      <div className={styles.data}>
        <h3>{user.name}</h3>
        <p>{user.status ? user.status : "No status"}</p>
      </div>
    </div>
  );
};

export default User;

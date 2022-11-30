import React from "react";
import styles from "./Users.module.css";
import user_avatar_placeholder from "../../assets/images/user_avatar_placeholder.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={styles.pages}>
        {pages.map((p) =>
          // prettier-ignore
          <span className={props.currentPage === p ? styles.selectedPage : ""} key={p} onClick={(e) => props.onPageChanged(p)}>{p}</span>
        )}
      </div>

      <div className={styles.users}>
        {props.users.map((user) => (
          <div key={user.id} className={styles.user}>
            <div className={styles.image}>
              <div>
                <NavLink to={"/profile/" + user.id}>
                  <img src={user.photos.small != null ? user.photos.small : user_avatar_placeholder} className={styles.userAvatar} alt="User avatar" />
                </NavLink>
              </div>
              <div>
                {
                  // prettier-ignore
                  user.followed
              ? (<button onClick={() => {props.unfollow(user.id);}}>Unfollow</button>)
              : (<button onClick={() => {props.follow(user.id);}}>Follow</button>)
                }
              </div>
            </div>
            <div className={styles.data}>
              <h3>{user.name}</h3>
              <p>{"user.status"}</p>
              <span>{"{user.location.country} {user.location.city}"}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

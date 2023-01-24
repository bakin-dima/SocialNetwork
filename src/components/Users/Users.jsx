import React from "react";
import styles from "./Users.module.css";
import user_avatar_placeholder from "../../assets/images/user_avatar_placeholder.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  let step = 3;
  let firstPage = props.currentPage - step;
  let lastPage = props.currentPage + step;

  for (let i = 1; i <= pagesCount; i++) {
    if (lastPage > pagesCount) {
      lastPage = pagesCount;
    }
    if (firstPage <= 0) {
      firstPage = 1;
      lastPage = step * 2 + 1;
    }
    if (props.currentPage + step >= pagesCount) {
      firstPage = pagesCount - step * 2;
    }
    if (i >= firstPage && i <= lastPage) {
      pages.push(i);
    }
  }

  return (
    <div>
      <div className={styles.pages}>
        <button onClick={(e) => props.onPageChanged(1)}>&lt;&lt;</button>
        <button onClick={(e) => props.onPageChanged(props.currentPage - 1 <= 0 ? 1 : props.currentPage - 1)}>&lt;</button>
        <div className={styles.pagesList}>
          {pages.map((page) =>
            // prettier-ignore
            <button className={props.currentPage === page ? styles.selectedPage : ""} key={page} onClick={(e) => props.onPageChanged(page)}>{page}</button>
          )}
        </div>
        <button onClick={(e) => props.onPageChanged(props.currentPage + 1 >= pagesCount ? pagesCount : props.currentPage + 1)}>&gt;</button>
        <button onClick={(e) => props.onPageChanged(pagesCount)}>&gt;&gt;</button>
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
              {props.isAuth && (
                <div>
                  {user.followed ? (
                    <button
                      disabled={props.followingInProgress.some((id) => id === user.id)}
                      className={styles.follow}
                      onClick={() => {
                        props.unfollow(user.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      disabled={props.followingInProgress.some((id) => id === user.id)}
                      className={styles.unfollow}
                      onClick={() => {
                        props.follow(user.id);
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
        ))}
      </div>
    </div>
  );
};

export default Users;

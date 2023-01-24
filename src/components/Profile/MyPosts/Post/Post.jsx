import React from "react";
import styles from "./Post.module.css";
import userPhoto from "../../../../assets/images/user_avatar_placeholder.png";
import likeImage from "../../../../assets/images/like.svg";

const Posts = (props) => (
  <div id={props.id} className={styles.item}>
    <div>
      <img className={styles.avatar} src={userPhoto} alt="Avatar" />
      <p>{props.message}</p>
    </div>
    <div className={styles.likes}>
      {props.likesCount}
      <button>{<img src={likeImage} alt="like" />}</button>
    </div>
  </div>
);

export default Posts;

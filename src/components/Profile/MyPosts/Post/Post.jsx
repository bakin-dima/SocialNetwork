import React from "react";
import styles from "./Post.module.scss";
import userPhoto from "../../../../assets/images/user_avatar_placeholder.png";
import likeImage from "../../../../assets/images/like.svg";
import Avatar from "../../../common/Avatar/Avatar";

const Posts = (props) => (
  <div id={props.id} className={styles.item}>
    <div>
      <p>{props.message}</p>
    </div>
    <div className={styles.likes}>
      {props.likesCount}
      <button>{<img src={likeImage} alt="like" />}</button>
    </div>
  </div>
);

export default Posts;

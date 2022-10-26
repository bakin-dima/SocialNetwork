import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  let userName = props.firstName + " " + props.lastName;

  return (
    <div className={styles.content}>
      <div className={styles.profileImage}>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt=""></img>
      </div>
      <div className={styles.profileDescription}>
        <div>User Avatar</div>
        <div>{userName}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
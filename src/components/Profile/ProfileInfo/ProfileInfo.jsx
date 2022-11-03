import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.profileImage}>
        <img src={props.userData.userBackground} alt="userBackground" />
      </div>
      <div className={styles.profileDescription}>
        <img className={styles.avatar} src={props.userData.userAvatar} alt="avatar" />

        <div>
          <div>{props.userData.userFirstName}</div>
          <div>{props.userData.userLastName}</div>
          <div>{props.userData.userDescription}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

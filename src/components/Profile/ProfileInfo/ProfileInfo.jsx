import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  let user = {
    name: `${props.userData.userFirstName} ${props.userData.userLastName}`,
    description: props.userData.userDescription,
    avatar: props.userData.userAvatar,
    background: props.userData.userBackground,
  };

  return (
    <div className={styles.content}>
      <div className={styles.profileImage}>
        <img src={user.background} alt=""></img>
      </div>
      <div className={styles.profileDescription}>
        <img className={styles.avatar} src={user.avatar} alt="Avatar" />

        <div>
          <div>{user.name}</div>
          <div>{user.description}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

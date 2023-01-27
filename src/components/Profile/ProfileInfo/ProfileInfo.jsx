import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/user_avatar_placeholder.png";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={styles.content}>
      <div className={styles.profileDescription}>
        <img className={styles.avatar} src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt="avatar" />
        <div className={styles.Description}>
          <div>{props.profile.fullName}</div>
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

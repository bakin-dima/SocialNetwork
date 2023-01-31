import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { Avatar } from "../../common/Avatar/Avatar";

const ProfileInfo = ({ profile, status, updateStatus, ...props }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className={styles.content}>
      <div className={styles.profileDescription}>
        <Avatar path={profile.photos.small} elementStyle={styles.avatar} />
        <div className={styles.Description}>
          <div>{profile.fullName}</div>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

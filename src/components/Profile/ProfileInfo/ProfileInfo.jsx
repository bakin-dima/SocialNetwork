import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { Avatar } from "../../common/Avatar/Avatar";
import photoUpload from "../../../assets/images/photoUpload.svg";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, ...props }) => {
  console.log(profile);
  const onMainPhotoSelected = (e) => {
    if (e.target.files[0]) {
      savePhoto(e.target.files[0]);
    }
  };

  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className={styles.content}>
      <div className={styles.profileDescription}>
        <div className={styles.profileAvatar}>
          <Avatar path={profile.photos.small} elementStyle={styles.avatar} />
          {isOwner && (
            <label className={styles.avatarUploadLabel} htmlFor="image_upload">
              <img src={photoUpload} alt="uploadPhoto" />
            </label>
          )}
          {isOwner && <input id={"image_upload"} className={styles.avatarUpload} type={"file"} onChange={onMainPhotoSelected} />}
        </div>
        <div className={styles.Description}>
          <div>{profile.fullName}</div>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { Avatar } from "../../common/Avatar/Avatar";
import photoUpload from "../../../assets/images/photoUpload.svg";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile, ...props }) => {
  const onMainPhotoSelected = (e) => {
    if (e.target.files[0]) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  let [editMode, setEditMode] = useState(false);

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
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        {editMode ? (
          <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
        ) : (
          <ProfileData profile={profile} isOwner={isOwner} enterEditMode={() => setEditMode(true)} />
        )}
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, enterEditMode }) => {
  return (
    <div className={styles.Description}>
      {isOwner && (
        <div>
          <button onClick={enterEditMode}>edit</button>
        </div>
      )}
      <div>{profile.fullName}</div>
      <div>Looking for a job {profile.lookingForAJob ? "Yes" : "No"}</div>
      {profile.lookingForAJob && <div>My profession skills {profile.lookingForAJobDescription}</div>}
      <div>About me: {profile.aboutMe}</div>
      <div>
        Contacts:
        {Object.keys(profile.contacts).map((key) => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />;
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={styles.contacts}>
      <b>{contactTitle}</b>
      {contactValue}
    </div>
  );
};

export default ProfileInfo;

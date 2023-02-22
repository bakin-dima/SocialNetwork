import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.scss";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import Avatar from "../../common/Avatar/Avatar";
import photoUpload from "../../../assets/images/photoUpload.svg";
import ProfileDataForm from "./ProfileDataForm";
import Button from "../../common/Button/Button";

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
      <div className={styles.description}>
        <div className={styles.avatar}>
          <Avatar path={profile.photos.small} elementStyle={styles.avatar} />
          {isOwner && (
            <label className={styles.avatarUploadLabel} htmlFor="image_upload">
              <img src={photoUpload} alt="uploadPhoto" />
            </label>
          )}
          {isOwner && <input id={"image_upload"} className={styles.avatarUpload} type={"file"} onChange={onMainPhotoSelected} />}
        </div>
        <div>
          <div className={styles.fullName}>{profile.fullName}</div>
          <ProfileStatusWithHooks status={status} isOwner={isOwner} updateStatus={updateStatus} />
        </div>
      </div>
      {editMode ? (
        <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
      ) : (
        <ProfileData profile={profile} isOwner={isOwner} enterEditMode={() => setEditMode(true)} />
      )}
    </div>
  );
};

const ProfileData = ({ profile, isOwner, enterEditMode }) => {
  return (
    <div className={styles.aboutMe}>
      {isOwner && (
        <div>
          <Button title="Edit" action={enterEditMode} animation={false} />
        </div>
      )}

      <div>
        <b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My profession skills:</b> {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me:</b> {profile.aboutMe}
      </div>
      <div className={styles.contacts}>
        {Object.keys(profile.contacts).map((key) => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />;
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={styles.links}>
      <b>{contactTitle}: </b>
      <span>{contactValue}</span>
    </div>
  );
};

export default ProfileInfo;

import React from "react";
import Preloader from "../../common/preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/user_avatar_placeholder.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={styles.content}>
      {/* <div className={styles.profileImage}>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt="userBackground" />
      </div> */}
      <div className={styles.profileDescription}>
        <img className={styles.avatar} src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt="avatar" />

        <div className={styles.Description}>
          <div>{props.profile.fullName}</div>
          <ProfileStatus status={"My test status"} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

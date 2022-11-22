import React from "react";
import styles from "./Profile.module.css";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={styles.content}>
      <ProfileInfoContainer />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;

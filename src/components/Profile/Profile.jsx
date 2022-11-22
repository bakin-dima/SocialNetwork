import React from "react";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={styles.content}>
      {/* <ProfileInfo userData={props.store.getState().profilePage.userData} /> */}
      <MyPostsContainer />
    </div>
  );
};
export default Profile;

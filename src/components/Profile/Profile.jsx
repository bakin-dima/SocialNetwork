import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => (
  <div className={styles.content}>
    <ProfileInfo firstName="Dima" lastName="Bakin" />
    <MyPosts />
  </div>
);

export default Profile;

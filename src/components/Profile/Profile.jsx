import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={styles.content}>
      <ProfileInfo userData={props.profilePage.userData} />
      {<MyPosts postsData={props.profilePage.postsData} newPostText={props.profilePage.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />}
    </div>
  );
};
export default Profile;

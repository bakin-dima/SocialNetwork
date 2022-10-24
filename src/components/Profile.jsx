import React from "react";
import styles from "./Profile.module.css";

const Profile = () => (
  <div className={styles.content}>
    <div>
      <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt=""></img>
    </div>
    <div>avatar + info</div>
    <div>
      My Posts
      <div>New Post</div>
      <div>
        <div className={styles.item}>Post1</div>
        <div className={styles.item}>Post2</div>
      </div>
    </div>
  </div>
);

export default Profile;

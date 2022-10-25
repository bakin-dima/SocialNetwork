import React from "react";
import styles from "./MyPosts.module.css";
import Posts from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, message: "Hello everybody!", likesCount: 15 },
    { id: 2, message: "It's my firs post!", likesCount: 13 },
    { id: 3, message: "I finally start my react-js learning", likesCount: 45 },
  ];

  let postsElements = postsData.map(p => <Posts id={p.id} message={p.message} likesCount={p.likesCount} />);

  return (
    <div className={styles.postsBlock}>
      <h3>My Posts</h3>
      <div className={styles.postsAddArea}>
        <textarea placeholder="Type here" cols="1px"></textarea>
        <button>Add Post</button>
      </div>
      {/* <Posts id={postsData[0].id} message={postsData[0].message} likesCounts={postsData[0].likes}  /> */}
      {postsElements}
    </div>
  );
};
export default MyPosts;

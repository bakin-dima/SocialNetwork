import React from "react";
import styles from "./MyPosts.module.css";
import Posts from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((p) => <Posts id={p.id} message={p.message} likesCount={p.likesCount} />);

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={styles.postsBlock}>
      <h3>My Posts</h3>
      <div className={styles.postsAddArea}>
        <textarea placeholder="Type here" cols="1px" onChange={onPostChange} value={props.newPostText} />
        <button onClick={onAddPost}>Add Post</button>
      </div>
      {postsElements}
    </div>
  );
};
export default MyPosts;

import React from "react";
import { addPostCreator, updateNewPostTextCreator } from "../../../redux/profileReducer";
import styles from "./MyPosts.module.css";
import Posts from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((p) => <Posts id={p.id} message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={styles.postsBlock}>
      <h3>My Posts</h3>
      <div className={styles.postsAddArea}>
        <textarea placeholder="Type here" cols="1px" ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
        <button onClick={addPost}>Add Post</button>
      </div>
      {postsElements}
    </div>
  );
};
export default MyPosts;

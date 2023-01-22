import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "./MyPosts.module.css";
import Posts from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((p) => <Posts id={p.id} key={p.id} message={p.message} likesCount={p.likesCount} />);

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={styles.postsBlock}>
      <h3>My Posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      {postsElements}
    </div>
  );
};

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.postsAddArea}>
      <Field component={"textarea"} name={"newPostText"} placeholder="Type here" cols="1px" />
      <button>Add Post</button>
    </form>
  );
};
const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

export default MyPosts;

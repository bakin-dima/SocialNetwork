import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "./MyPosts.module.scss";
import Posts from "./Post/Post";
import { maxLengthCreator, requiredField } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import Button from "../../common/Button/Button";

const maxLength10 = maxLengthCreator(300);

const MyPosts = (props) => {
  let postsElements = [...props.postsData]
    .reverse()
    .map((p) => <Posts id={p.id} key={p.id} message={p.message} likesCount={p.likesCount} />);

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
      <Field validate={[requiredField, maxLength10]} component={Textarea} name={"newPostText"} placeholder="Type here" cols="1px" />
      <Button title="Add Post" animation={false} />
    </form>
  );
};
const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

export default MyPosts;

import React from "react";
import { addPostCreator, updateNewPostTextCreator } from "../../../redux/profileReducer";
import StoreContext from "../../../storeContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addPostCreator());
        };

        let onPostChange = (text) => {
          let action = updateNewPostTextCreator(text);
          store.dispatch(action);
        };
        return <MyPosts updateNewPostText={onPostChange} addPost={addPost} postsData={state.profilePage.postsData} newPostText={state.profilePage.newPostText} />;
      }}
    </StoreContext.Consumer>
  );
};
export default MyPostsContainer;

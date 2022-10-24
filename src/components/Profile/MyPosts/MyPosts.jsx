import React from "react";
import styles from "./MyPosts.module.css";
import Posts from "./Post/Post";


const MyPosts = () => (
  <div>
    My Posts
    <div>
      <textarea></textarea>
      <button>Add Post</button>
      <button>Clear</button>
    </div>
    <Posts message="Hello everybody!" likeCounts="15" />
    <Posts message="It's my firs post!" likeCounts="20" />
    <Posts message="nXspRdMeLHLWCBCIgcN51yTN03cOfn0RnEeHHPWCXWfTr2QPfMi28a5Jboj8N51yTi6Y8WOWsEZxHhxz1ggjstxOuSac" likeCounts='21'/>
  </div>
);

export default MyPosts;

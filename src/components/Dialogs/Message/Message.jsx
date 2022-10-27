import React from "react";
import styles from "../Dialogs.module.css";

const Message = (props) => {
  return (
    <div className={styles.message} id={props.id}>
      <div>{props.message}</div>
      <span>{props.date}</span>
    </div>
  );
};

export default Message;

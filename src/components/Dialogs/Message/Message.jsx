import React from "react";
import styles from "../Dialogs.module.css";

const Message = ({ id, message, date, ...props }) => {
  return (
    <div className={styles.message} id={id}>
      <div>{message}</div>
      <span>{date}</span>
    </div>
  );
};

export default Message;

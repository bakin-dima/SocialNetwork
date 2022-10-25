import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={styles.dialog}>
      <NavLink className={(NavData) => (NavData.isActive ? styles.active : "")} to={path}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={styles.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>
        <DialogItem name="Dima" id="1" />
        <DialogItem name="Kate" id="1" />
        <DialogItem name="Vadim" id="1" />
        <DialogItem name="Natali" id="1" />
        <DialogItem name="Michail" id="1" />
      </div>
      <div className={styles.messages}>
        <Message message="Hello" />
        <Message message="How are you" />
        <Message message="Today is be a great day" />
        <Message message="See you later" />
      </div>
    </div>
  );
};

export default Dialogs;

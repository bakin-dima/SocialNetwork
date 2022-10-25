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
  let dialogsData = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Kate" },
    { id: 3, name: "Vadim" },
    { id: 4, name: "Natali" },
    { id: 5, name: "Michail" },
  ];

  let messagesData = [
    { id: 1, message: "Hi how are you" },
    { id: 2, message: "Today is be a great day" },
    { id: 3, message: "See you later guys" },
    { id: 4, message: "Today i start my reactApp" },
    { id: 5, message: "Initial commit :)" },
  ];
  
  let dialogsElements = dialogsData.map((d) => <DialogItem id={d.id} name={d.name} />);
  let messagesElements = messagesData.map((m) => <Message id={m.id} message={m.message} />);

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>
        {/* <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} /> */}
        {dialogsElements}
      </div>

      <div className={styles.messages}>
        {/* <Message id={messagesData[0].id} message={messagesData.message} /> */}
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;

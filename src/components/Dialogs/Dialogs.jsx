import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((d) => <DialogItem id={d.id} name={d.name} />);
  let messagesElements = props.state.messagesData.map((m) => <Message id={m.id} message={m.message} />);

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>{dialogsElements}</div>

      <div className={styles.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;

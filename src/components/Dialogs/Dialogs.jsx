import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";

const Dialogs = (props) => {
  let state = props.messagesPage;


  let dialogsElements = state.dialogsData.map((d) => <DialogItem id={d.id} name={d.name} />);
  let messagesElements = state.messagesData.map((m) => <Message id={m.id} message={m.message} date={m.date} />);
  let newMessageText = state.newMessageText;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={styles.dialog__page}>
      <div className={styles.dialogs}>
        <div className={styles.items}>{dialogsElements}</div>
        <div className={styles.messages}>{messagesElements}</div>
      </div>
      <div className={styles.sendMessage}>
        <textarea placeholder="Type message here" cols="1px" onChange={onMessageChange} value={newMessageText} />
        <button onClick={onSendMessageClick}>Send Message</button>
      </div>
    </div>
  );
};
export default Dialogs;

import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import { addMessageCreator, updateNewMessageTextCreator } from "../../redux/messagesReducer";

const Dialogs = (props) => {
  let dialogsElements = props.messagesPage.dialogsData.map((d) => <DialogItem id={d.id} name={d.name} />);
  let messagesElements = props.messagesPage.messagesData.map((m) => <Message id={m.id} message={m.message} date={m.date} />);

  let onSendMessageClick = () => {
    props.dispatch(addMessageCreator());
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewMessageTextCreator(text));
  };

  return (
    <div className={styles.dialog__page}>
      <div className={styles.dialogs}>
        <div className={styles.items}>{dialogsElements}</div>
        <div className={styles.messages}>{messagesElements}</div>
      </div>
      <div className={styles.sendMessage}>
        <textarea placeholder="Type message here" cols="1px" onChange={onMessageChange} value={props.messagesPage.newMessageText} />
        <button onClick={onSendMessageClick}>Send Message</button>
      </div>
    </div>
  );
};
export default Dialogs;

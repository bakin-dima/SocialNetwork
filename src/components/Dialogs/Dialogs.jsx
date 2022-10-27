import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";

const Dialogs = (props) => {
  let dialogsElements = props.messagesPage.dialogsData.map((d) => <DialogItem id={d.id} name={d.name} />);
  let messagesElements = props.messagesPage.messagesData.map((m) => <Message id={m.id} message={m.message} date={m.date} />);

  let messageContent = React.createRef();

  let sendMessage = () => {
    props.sendMessage();
  };

  let onMessageChange = () => {
    let newText = messageContent.current.value;
    props.updateNewMessageText(newText);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>{dialogsElements}</div>

      <div>
        <div className={styles.messages}>{messagesElements}</div>
        <div className={styles.sendMessage}>
          <textarea placeholder="Type here" cols="1px" ref={messageContent} onChange={onMessageChange} value={props.messagesPage.newMessageText} />
          <button onClick={sendMessage}>Send Message</button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;

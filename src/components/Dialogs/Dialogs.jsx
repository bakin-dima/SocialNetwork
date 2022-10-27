import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((d) => <DialogItem id={d.id} name={d.name} />);
  let messagesElements = props.state.messagesData.map((m) => <Message id={m.id} message={m.message} />);

  let messageContent = React.createRef();
  let sendMessage = () => {
    alert(messageContent.current.value);
    messageContent.current.value = "";
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>{dialogsElements}</div>

      <div>
        <div className={styles.messages}>{messagesElements}</div>
        <div className={styles.sendMessage}>
          <textarea placeholder="Type here" cols="1px" ref={messageContent}></textarea>
          <button onClick={sendMessage}>Send Message</button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;

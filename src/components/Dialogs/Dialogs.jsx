import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, requiredField } from "../../utils/validators/validators";

const Dialogs = (props) => {
  let dialogsElements = props.messagesPage.dialogsData.map((d) => <DialogItem id={d.id} key={d.id} name={d.name} />);
  let messagesElements = props.messagesPage.messagesData.map((m) => <Message id={m.id} key={m.id} message={m.message} date={m.date} />);

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <div className={styles.dialog__page}>
      <div className={styles.dialogs}>
        <div className={styles.items}>{dialogsElements}</div>
        <div className={styles.messages}>{messagesElements}</div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.sendMessage}>
        <Field component={Textarea} validate={[requiredField, maxLength100]} name={"newMessageBody"} placeholder="Type message here" cols="1px" />
        <button>Send Message</button>
      </div>
    </form>
  );
};
const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);

export default Dialogs;

import React from "react";
import { addMessageCreator, updateNewMessageTextCreator } from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().messagesPage;

  let onSendMessageClick = () => {
    props.store.dispatch(addMessageCreator());
  };

  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextCreator(text));
  };

  return <Dialogs messagesPage={state} sendMessage={onSendMessageClick} updateNewMessageText={onMessageChange} />;
};
export default DialogsContainer;

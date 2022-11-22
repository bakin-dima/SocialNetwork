import React from "react";
import { addMessageCreator, updateNewMessageTextCreator } from "../../redux/messagesReducer";
import StoreContext from "../../storeContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().messagesPage;

        let onSendMessageClick = () => {
          store.dispatch(addMessageCreator());
        };

        let onMessageChange = (text) => {
          store.dispatch(updateNewMessageTextCreator(text));
        };
        return <Dialogs messagesPage={state} sendMessage={onSendMessageClick} updateNewMessageText={onMessageChange} />;
      }}
    </StoreContext.Consumer>
  );
};
export default DialogsContainer;

import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessageCreator, updateNewMessageTextCreator } from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(addMessageCreator());
    },
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextCreator(text));
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);

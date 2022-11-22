const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let initialState = {
  dialogsData: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Kate" },
    { id: 3, name: "Vadim" },
    { id: 4, name: "Natali" },
    { id: 5, name: "Michail" },
  ],
  messagesData: [
    { id: 1, message: "Hi how are you", date: "10.09.2022" },
    { id: 2, message: "Today is be a great day", date: "13.09.2022" },
    { id: 3, message: "See you later guys", date: "07.10.2022" },
    { id: 4, message: "Today i start my reactApp", date: "25.10.2022" },
    { id: 5, message: "Initial commit :)", date: "10.11.2022" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessageBody = state.newMessageText;
      return {
        ...state,
        messagesData: [{ id: state.messagesData.length + 1, message: newMessageBody, date: new Date().toLocaleDateString() }, ...state.messagesData],
        newMessageText: "",
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText,
      };
    default:
      return state;
  }
};

export const addMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;

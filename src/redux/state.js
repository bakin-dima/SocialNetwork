import renderEntireTree from "../render";

let state = {
  profilePage: {
    postsData: [
      { id: 1, message: "Hello everybody!", likesCount: 15 },
      { id: 2, message: "It's my firs post!", likesCount: 13 },
      { id: 3, message: "I finally start my react-js learning", likesCount: 45 },
    ],
    newPostText: "",
  },
  messagesPage: {
    dialogsData: [
      { id: 1, name: "Dima" },
      { id: 2, name: "Kate" },
      { id: 3, name: "Vadim" },
      { id: 4, name: "Natali" },
      { id: 5, name: "Michail" },
    ],
    messagesData: [
      { id: 1, message: "Hi how are you" },
      { id: 2, message: "Today is be a great day" },
      { id: 3, message: "See you later guys" },
      { id: 4, message: "Today i start my reactApp" },
      { id: 5, message: "Initial commit :)" },
    ],
    newMessageText: "",
  },
  sidebar: {
    linksList: [
      { linkTitle: "Profile", linkPath: "/profile", props: "" },
      { linkTitle: "Messages", linkPath: "/dialogs", props: "" },
      { linkTitle: "News", linkPath: "/news", props: "" },
      { linkTitle: "Music", linkPath: "/music", props: "" },
      { linkTitle: "Settings", linkPath: "/settings", props: "" },
    ],

    friendsList: [
      { friendFirstName: "Vadim", friendLastName: "A", friendAvatar: "https://www.w3schools.com/w3images/avatar2.png" },
      { friendFirstName: "Kate", friendLastName: "S", friendAvatar: "https://www.w3schools.com/w3images/avatar5.png" },
      { friendFirstName: "Dima", friendLastName: "B", friendAvatar: "https://www.w3schools.com/w3images/avatar5.png" },
      { friendFirstName: "Kate", friendLastName: "B", friendAvatar: "https://www.w3schools.com/howto/img_avatar2.png" },
      { friendFirstName: "Michail", friendLastName: "B", friendAvatar: "https://www.w3schools.com/howto/img_avatar.png" },
      { friendFirstName: "Natallia", friendLastName: "B", friendAvatar: "https://www.w3schools.com/howto/img_avatar2.png" },
    ],
  },
};

export let addPost = () => {
  let newPost = {
    id: state.profilePage.postsData.length + 1,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.postsData.unshift(newPost);
  state.profilePage.newPostText = "";
  renderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
};

export let sendMessage = () => {
  let newMessage = {
    id: state.messagesPage.messagesData.length + 1,
    message: state.messagesPage.newMessageText,
  };
  state.messagesPage.messagesData.unshift(newMessage);
  state.messagesPage.newMessageText = "";
  renderEntireTree(state);
};

export let updateNewMessageText = (newText) => {
  state.messagesPage.newMessageText = newText;
  renderEntireTree(state);
};

window.state = state;

export default state;

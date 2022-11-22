let initialState = {
  linksList: [
    { id: 1, linkTitle: "Profile", linkPath: "/profile" },
    { id: 2, linkTitle: "Messages", linkPath: "/dialogs" },
    { id: 3, linkTitle: "News", linkPath: "/news" },
    { id: 4, linkTitle: "Music", linkPath: "/music" },
    { id: 5, linkTitle: "Settings", linkPath: "/settings" },
  ],

  friendsList: [
    { id: 1, friendFirstName: "Vadim", friendLastName: "A", friendAvatar: "https://www.w3schools.com/w3images/avatar2.png" },
    { id: 2, friendFirstName: "Kate", friendLastName: "S", friendAvatar: "https://www.w3schools.com/w3images/avatar5.png" },
    { id: 3, friendFirstName: "Dima", friendLastName: "B", friendAvatar: "https://www.w3schools.com/w3images/avatar5.png" },
    { id: 4, friendFirstName: "Kate", friendLastName: "B", friendAvatar: "https://www.w3schools.com/howto/img_avatar2.png" },
    { id: 5, friendFirstName: "Michail", friendLastName: "B", friendAvatar: "https://www.w3schools.com/howto/img_avatar.png" },
    { id: 6, friendFirstName: "Natallia", friendLastName: "B", friendAvatar: "https://www.w3schools.com/howto/img_avatar2.png" },
    
  ],
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default sidebarReducer;

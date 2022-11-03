let initialState = {
  linksList: [
    { linkTitle: "Profile", linkPath: "/profile" },
    { linkTitle: "Messages", linkPath: "/dialogs" },
    { linkTitle: "News", linkPath: "/news" },
    { linkTitle: "Music", linkPath: "/music" },
    { linkTitle: "Settings", linkPath: "/settings" },
  ],

  friendsList: [
    { friendFirstName: "Vadim", friendLastName: "A", friendAvatar: "https://www.w3schools.com/w3images/avatar2.png" },
    { friendFirstName: "Kate", friendLastName: "S", friendAvatar: "https://www.w3schools.com/w3images/avatar5.png" },
    { friendFirstName: "Dima", friendLastName: "B", friendAvatar: "https://www.w3schools.com/w3images/avatar5.png" },
    { friendFirstName: "Kate", friendLastName: "B", friendAvatar: "https://www.w3schools.com/howto/img_avatar2.png" },
    { friendFirstName: "Michail", friendLastName: "B", friendAvatar: "https://www.w3schools.com/howto/img_avatar.png" },
    { friendFirstName: "Natallia", friendLastName: "B", friendAvatar: "https://www.w3schools.com/howto/img_avatar2.png" },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default sidebarReducer;

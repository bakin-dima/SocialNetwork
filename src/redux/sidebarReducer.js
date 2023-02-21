const links = ["Profile", "Dialogs", "Users", "News", "Music", "Settings"];

let initialState = {
  linksList: links.map((el, id) => ({ id: id + 1, linkTitle: el, linkPath: `/${el}` })),
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default sidebarReducer;

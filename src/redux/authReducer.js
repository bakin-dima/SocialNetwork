import { authAPI, usersAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_CURRENT_USER = "SET_CURRENT_USER";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  isFetching: true,
  currentUser: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.currentUser,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, login, email) => ({ type: SET_USER_DATA, data: { userId, login, email } });
export const setCurrentUser = (currentUser) => ({ type: SET_CURRENT_USER, currentUser });

export const getAuthUserData = () => (dispatch) => {
  authAPI.authUser().then((data) => {
    if (data.resultCode === 0) {
      let { id, login, email } = data.data;
      dispatch(setAuthUserData(id, login, email));
    }
  });
};

export default authReducer;

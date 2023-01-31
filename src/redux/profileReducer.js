import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
  postsData: [
    { id: 1, message: "First test message", likesCount: 3 },
    { id: 2, message: "I finally start my react-js learning", likesCount: 45 },
    { id: 3, message: "It's my firs post!", likesCount: 13 },
    { id: 4, message: "Hello everybody!", likesCount: 15 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = action.newPostText;
      return {
        ...state,
        postsData: [...state.postsData, { id: state.postsData.length + 1, message: newPost, likesCount: 0 }],
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case DELETE_POST: {
      return {
        ...state,
        postsData: state.postsData.filter((p) => p.id !== action.postId),
      };
    }
    default:
      return state;
  }
};

export const addPostCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const getUserProfile = (userId) => async (dispatch) => {
  let data = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(data));
};

export const getStatus = (userId) => async (dispatch) => {
  let data = await profileAPI.getStatus(userId);
  dispatch(setStatus(data));
};

export const updateStatus = (status) => async (dispatch) => {
  let data = await profileAPI.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;

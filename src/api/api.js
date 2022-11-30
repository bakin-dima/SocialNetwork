import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "f6fa33de-2674-4b13-af7c-b0063f3a4443",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 15) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
  },

  currentUser(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
};

export const followAPI = {
  userUnfollow(userId) {
    return instance.delete(`follow/${userId}`).then((response) => response.data);
  },

  userFollow(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
};
export const authAPI = {
  authUser() {
    return instance.get("auth/me").then((response) => response.data);
  },
};

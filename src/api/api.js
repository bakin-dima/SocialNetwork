import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "488cbe6c-7141-43af-961d-a11fd9330bf4",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 6) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
  },

  getFollowedUsers() {
    return instance.get(`users?friend=true&count=100`).then((response) => response.data);
  },

  getProfile(userId) {
    console.warn("Obsolete method. Please use profileAPI object");
    return profileAPI.getProfile(userId);
  },
  userUnfollow(userId) {
    return instance.delete(`follow/${userId}`).then((response) => response.data);
  },

  userFollow(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then((response) => response.data);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status }).then((response) => response.data);
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo`, formData).then((response) => response.data);
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile).then((response) => response.data);
  },
};

export const authAPI = {
  authUser() {
    return instance.get("auth/me").then((response) => response.data);
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post("auth/login", { email, password, rememberMe, captcha }).then((response) => response.data);
  },
  logout() {
    return instance.delete("auth/login").then((response) => response.data);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get("security/get-captcha-url").then((response) => response.data);
  },
};

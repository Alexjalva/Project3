import axios from "axios";

export default {
  // Gets user info
  getUser: function() {
    return axios.get('/auth/user');
  },
  // Logs the user out
  logout: function() {
    console.log("logout");
    return axios.post('/auth/logout');
  },
  // Log the user in
  login: function(userInfo) {
    console.log(userInfo)
    return axios.post('/auth/login', userInfo);
  },
  // New user registration
  signup: function(userData) {
    console.log(userData);
    return axios.post('/auth/signup', userData);
  }
};
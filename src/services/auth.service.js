import axios from "axios";

const API_URL = "https://weshare-heroku.herokuapp.com/api/weShare/user/";

const register = (email, password, confirmPassword) => {
  return axios.post(API_URL + "register", {
    email,
    password,
    confirmPassword,
  });
};
//add confirmPassword di sini.

const forget = (email, password, confirmPassword) => {
  return axios.put(API_URL + "forgetPassword", {
    email,
    password,
    confirmPassword,
  });
};

const update = (email, fullName, id) => {
  return axios.put(API_URL + `editProfile/${id}`, {
    email,
    fullName,
  });
};

const verify = (IdNum, birthDate, bornPlace, expiryDate, id) => {
  return axios.put(API_URL + `verifyAccount/${id}`, {
    IdNum, 
    birthDate,
    bornPlace,
    expiryDate,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("register");
};

export default {
  register,
  login,
  update,
  logout,
  forget,
  verify
};

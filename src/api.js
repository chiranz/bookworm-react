import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api";

export default {
  user: {
    login: credentials =>
      axios.post("auth", { credentials }).then(res => res.data.user),
    signup: user => axios.post("users", { user }).then(res => res.data.user),
    confirm: token =>
      axios.post("auth/confirmation", { token }).then(res => res.data.user)
  }
};

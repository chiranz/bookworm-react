import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios
        .post("rest-auth/login/", { credentials })
        .then(response => response.data.user)
  }
};

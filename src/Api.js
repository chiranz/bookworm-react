import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios
        .post("profile/dummy/", { credentials })
        .then(response => response.data.user)
  }
};

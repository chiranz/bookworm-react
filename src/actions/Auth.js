import { USER_LOGGED_IN } from "../Types";
import Api from "../Api";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const login = credentials => dispatch =>
  Api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));

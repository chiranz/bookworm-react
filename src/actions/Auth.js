import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../Types";
import Api from "../Api";

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const login = credentials => dispatch =>
  Api.user.login(credentials).then(user => {
    localStorage.bookWormToken = user.token;
    dispatch(userLoggedIn(user));
  });

export const logout = () => dispatch => {
  localStorage.removeItem("bookWormToken");
  dispatch(userLoggedOut);
};

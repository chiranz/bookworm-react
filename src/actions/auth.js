import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../Types";
import Api from "../api";

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  payload: user
});

export const login = credentials => dispatch =>
  Api.user.login(credentials).then(user => {
    localStorage.bookWormJWT = user.token;
    dispatch(userLoggedIn(user));
  });

export const logout = () => dispatch => {
  localStorage.removeItem("bookWormJWT");
  dispatch(userLoggedOut());
};

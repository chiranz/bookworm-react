import Api from "../Api";
import { userLoggedIn } from "./Auth";

export const signup = data => dispatch =>
  Api.user.signup(data).then(user => dispatch(userLoggedIn(user)));

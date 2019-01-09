import { USER_LOGGED_IN } from "../Types";

export default function User(state = {}, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.user;
    default:
      return state;
  }
}
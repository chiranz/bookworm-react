import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../Types";

export default function User(state = {}, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return { ...state, ...action.payload };
    case USER_LOGGED_OUT:
      return {};
    default:
      return state;
  }
}

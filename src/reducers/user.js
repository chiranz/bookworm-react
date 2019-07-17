import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../Types";

const initialState = {
  username: "",
  token: "",
  isAuthenticated: false
};

export default function User(state = initialState, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return { ...state, ...action.payload, isAuthenticated: true };
    case USER_LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
}

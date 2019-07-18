import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import decode from "jwt-decode";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { userLoggedIn } from "./actions/auth";
import setAuthorizationHeader from "./utils/setAuthorizationHeader";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

if (localStorage.bookWormJWT) {
  const payload = decode(localStorage.bookWormJWT);
  const user = {
    token: localStorage.bookWormJWT,
    email: payload.email,
    confirmed: payload.confirmed,
    username: payload.username
  };
  setAuthorizationHeader(localStorage.bookWormJWT);
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      {/* Route provides history / location props  to entire Pages and can be passed down */}
      <Route render={props => <App {...props} />} />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);

serviceWorker.unregister();

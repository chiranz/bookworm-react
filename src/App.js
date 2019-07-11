import React from "react";
import HomePage from "./components/pages/HomePage";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import LoginPage from "./components/pages/LoginPage";
import SignUpPage from "./components/pages/SignUpPage";
import ConfirmationPage from "./components/pages/ConfirmationPage";
import DashboardPage from "./containers/DashboardPage";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";

const App = ({ location }) => (
  <div className="ui container">
    <Route location={location} path="/" exact component={HomePage} />
    <Route
      location={location}
      path="/confirmation/:token"
      exact
      component={ConfirmationPage}
    />
    <GuestRoute location={location} path="/login" exact component={LoginPage} />
    <GuestRoute
      location={location}
      path="/signup"
      exact
      component={SignUpPage}
    />
    <UserRoute
      location={location}
      path="/dashboard"
      exact
      component={DashboardPage}
    />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};
export default App;

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { logout } from "../../actions/Auth";

const HomePage = ({ isAuthenticated, logout }) => {
  return (
    <div>
      <h1>Home Page</h1>
      {isAuthenticated ? (
        <button onClick={() => logout}>Logout</button>
      ) : (
        <div>
          <Link to="/login">Login</Link> or
          <Link to="/signup">SignUp</Link>
        </div>
      )}
    </div>
  );
};

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.User.Token
});

export default connect(
  mapStateToProps,
  { logout }
)(HomePage);

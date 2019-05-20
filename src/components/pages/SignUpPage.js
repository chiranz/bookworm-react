import React, { Component } from "react";
import PropTypes from "prop-types";
import SignUpForm from "../forms/SignUpForm";
import { connect } from "react-redux";
import { signup } from "../../actions/Users";

class SignUpPage extends Component {
  submit = data =>
    this.props.signup(data).then(() => this.props.history.push("/dashboard"));
  render() {
    return (
      <div>
        <h1>Sign Up Page</h1>

        <SignUpForm submit={this.submit} />
      </div>
    );
  }
}

SignUpPage.propsType = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired
};

export default connect(
  null,
  { signup }
)(SignUpPage);

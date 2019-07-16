import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Message } from "semantic-ui-react";
import ResetPasswordForm from "../forms/ResetPasswordForm";
import { validateToken, resetPassword } from "../../actions/auth";

export class ForgotPasswordPage extends Component {
  static propTypes = {
    validateToken: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        token: PropTypes.string.isRequired
      })
    }),
    resetPassword: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    })
  };
  state = { success: false, loading: true, resetSuccess: false };
  submit = data =>
    this.props.resetPassword(data).then(() => this.setState({ success: true }));

  componentDidMount() {
    this.props
      .validateToken(this.props.match.params.token)
      .then(() =>
        this.setState({
          loading: false,
          success: true
        })
      )
      .catch(() => {
        this.setState({
          loading: false,
          success: false
        });
      });
  }
  submit = data =>
    this.props
      .resetPassword(data)
      .then(() => this.setState({ resetSuccess: true, loading: false }));
  render() {
    const { loading, success, resetSuccess } = this.state;
    const token = this.props.match.params.token;
    return (
      <div>
        {loading && <Message>Loading</Message>}
        {!loading && success && (
          <ResetPasswordForm submit={this.submit} token={token} />
        )}
        {!loading && !success && <Message>Invalid token</Message>}
        {resetSuccess && (
          <Message success>
            Password change successful! <Link to="/login">Login again!</Link>
          </Message>
        )}
      </div>
    );
  }
}

export default connect(
  null,
  { validateToken, resetPassword }
)(ForgotPasswordPage);

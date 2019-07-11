import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Icon, Message } from "semantic-ui-react";
import { confirm } from "../../actions/auth";
import { connect } from "react-redux";

class ConfirmationPage extends Component {
  state = {
    loading: true,
    success: false
  };
  componentDidMount() {
    this.props
      .confirm(this.props.match.params.token)
      .then(() => this.setState({ loading: false, success: true }))
      .catch(err => {
        console.log(err);
        this.setState({ loading: false, success: false });
      });
  }

  render() {
    const { loading, success } = this.state;

    return (
      <div
        style={{
          marginTop: "6rem"
        }}
      >
        {loading && (
          <Message icon>
            <Icon name="circle notched" loading />
            <Message.Header>Validating your email.</Message.Header>
          </Message>
        )}
        {!loading && success && (
          <Message success icon>
            <Icon name="checkmark" />
            <Message.Content>
              <Message.Header>
                Thank you. Your account has been verified.
              </Message.Header>
              <Link to="/dashboard">Go to your dashboard</Link>
            </Message.Content>
          </Message>
        )}
        {!loading && !success && (
          <Message negative icon>
            <Icon name="warning sign" />
            <Message.Content>
              <Message.Header>Opps invalid token!!</Message.Header>
              <Link to="/">Home</Link>
            </Message.Content>
          </Message>
        )}
      </div>
    );
  }
}
ConfirmationPage.propTypes = {
  confirm: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired
    })
  })
};
export default connect(
  null,
  { confirm }
)(ConfirmationPage);

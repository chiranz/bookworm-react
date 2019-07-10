import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";

const DashboardPage = ({ isConfirmed }) => (
  <div>{!isConfirmed && <ConfirmEmailMessage />}</div>
);

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isConfirmed: !!state.User.confirmed
});

export default connect(
  mapStateToProps,
  null
)(DashboardPage);

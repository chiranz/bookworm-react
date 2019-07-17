import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import { allBooksSelector } from "../reducers/books";
import AddBookCallToAction from "../ctas/AddBookCallToAction";

const DashboardPage = ({ isConfirmed, books }) => (
  <div>
    {!isConfirmed && <ConfirmEmailMessage />}
    {books.length === 0 && <AddBookCallToAction />}
  </div>
);

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    })
  )
};

const mapStateToProps = state => ({
  isConfirmed: !!state.user.confirmed,
  books: allBooksSelector(state)
});

export default connect(
  mapStateToProps,
  null
)(DashboardPage);

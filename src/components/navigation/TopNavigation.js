import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import gravatarUrl from "gravatar-url";
import { logout } from "../../actions/auth";

function TopNavigation({ user, logout }) {
  return (
    <Menu secondary pointing>
      <Menu.Item as={Link} to="/dashboard">
        Dashboard
      </Menu.Item>
      <Menu.Menu position="right">
        <Dropdown trigger={<Image avatar src={gravatarUrl(user.email)} />}>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
}

TopNavigation.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  }),
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { logout }
)(TopNavigation);

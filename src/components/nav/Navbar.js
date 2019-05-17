import React, { Component } from "react";
import { Button, Menu, Modal } from "semantic-ui-react";
import LoginModel from "../modals/LoginModel";

export default class MenuResponsive extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  show = size => () => this.setState({ size, open: true });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size="large">
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position="right">
          <Menu.Item>
            <Modal
              trigger={
                <Button onClick={this.show("tiny")} primary>
                  Login or SignUp
                </Button>
              }
              closeIcon
            >
              <LoginModel />
            </Modal>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

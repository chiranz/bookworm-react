import React from "react";
import { Modal } from "semantic-ui-react";
import LoginPage from "../../containers/LoginPage";

const LoginModel = () => (
  <div>
    <Modal.Content>
      <LoginPage />
    </Modal.Content>
  </div>
);

export default LoginModel;

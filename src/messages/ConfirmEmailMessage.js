import React from "react";
import { Message } from "semantic-ui-react";

function ConfirmEmailMessage() {
  return (
    <Message info>
      <Message.Header>Please Verify your email to access more!</Message.Header>
    </Message>
  );
}

export default ConfirmEmailMessage;

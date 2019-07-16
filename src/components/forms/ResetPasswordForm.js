import React, { Component } from "react";
import { Form, Button, Message } from "semantic-ui-react";
import InlineError from "../messages/InlineError";

export class ResetPasswordForm extends Component {
  state = {
    data: {
      password: "",
      password1: "",
      token: this.props.token
    },
    loading: false,
    errors: {
      password: "",
      password1: "",
      global: ""
    }
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({
      errors: { ...errors }
    });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data).catch(error =>
        this.setState(initialState => {
          return {
            errors: { ...initialState.errors, ...error.response.data.errors },
            loading: false
          };
        })
      );
    }
  };

  validate = data => {
    const errors = {};
    if (!data.password) errors.password = "Can't be blank";
    if (data.password !== data.password1)
      errors.password1 = "Password didn't match";
    return errors;
  };
  render() {
    const { data, errors, loading } = this.state;
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors.global && (
          <Message negative>
            <Message.Header>Something went wrong!</Message.Header>
            <p>{errors.global}</p>
          </Message>
        )}
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Make it Secure"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>
        <Form.Field error={!!errors.password1}>
          <label htmlFor="password1">Confirm Password</label>
          <input
            type="password"
            name="password1"
            id="password1"
            placeholder="Type it again please"
            value={data.password1}
            onChange={this.onChange}
          />
          {errors.password1 && <InlineError text={errors.password1} />}
        </Form.Field>
        <Button primary>Reset</Button>
      </Form>
    );
  }
}

export default ResetPasswordForm;

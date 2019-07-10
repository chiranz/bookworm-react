import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "semantic-ui-react";
import { isEmail } from "validator";
import InlineError from "../messages/InlineError";

export class SignUpForm extends Component {
  state = {
    data: {
      username: "",
      email: "",
      password: "",
      password1: ""
    },
    loading: false,
    errors: {
      username: "",
      email: "",
      password: "",
      password1: ""
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors: { ...this.state.errors, ...errors } });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      const { username, password, email } = this.state.data;
      const userdata = { username, email, password };
      this.props.submit(userdata).catch(err =>
        this.setState({
          errors: { ...this.state.errors, ...err.response.data.errors },
          loading: false
        })
      );
    }
  };
  validate = data => {
    const errors = {};
    if (!isEmail(data.email)) errors.email = "Not a valid email";
    if (!data.password) errors.password = "Can't be blank";
    if (data.password !== data.password1)
      errors.password1 = "Password didn't match";

    return errors;
  };
  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  render() {
    const { data, errors, loading } = this.state;
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        <Form.Field error={!!errors.username}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            value={data.username}
            onChange={this.onChange}
          />
          {errors.username && <InlineError text={errors.username} />}
        </Form.Field>
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="username@email.com"
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="make it secure"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>
        <Form.Field error={!!errors.password1}>
          <label htmlFor="password1">Confirm Password</label>
          <input
            type="password"
            id="password1"
            name="password1"
            value={data.password1}
            onChange={this.onChange}
          />
          {errors.password1 && <InlineError text={errors.password1} />}
        </Form.Field>

        <Button primary>Sign Up</Button>
      </Form>
    );
  }
}

SignUpForm.propTypes = {
  submit: PropTypes.func.isRequired
};
export default SignUpForm;

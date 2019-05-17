import React, { Component } from "react";

class SemanticUi extends Component {
  state = {};
  render() {
    return (
      <div className="ui container">
        <button className="ui brown fluid button">I am Fluid</button>
        <br />
        <button className="ui massive brown fluid button">I am Fluid</button>
        <br />
        <button className="ui inverted brown fluid button">
          I am bootstrap's outline and ui's Inverted
        </button>
        <br />
        <button className="ui basic brown fluid button">
          I am UI's Basic button
        </button>
        <br />
        <button className="ui teal loading fluid button">
          I am Loading Fluid
        </button>
        <br />
        <button className="ui facebook button">
          <i className="facebook icon" />
          Facebook
        </button>

        <button className="ui youtube button">
          <i className="youtube icon" />
          Youtube
        </button>

        <button className="ui twitter button">
          <i className="twitter icon" />
          Twitter
        </button>

        <button className="ui instagram button">
          <i className="instagram icon" />
          Instagram
        </button>

        <button className="ui google plus button">
          <i className="google icon" />
          Gmail
        </button>

        <hr />
        <h1>I am animated Cart button</h1>
        <div className="ui vertical animated button" tabIndex="0">
          <div className="hidden content">Buy Me</div>
          <div className="visible content">
            <i className="shop icon" />
          </div>
        </div>
        <hr />
        <h1>I am Responsive Steps</h1>
        <h3 className="ui center aligned header">Responsive Steps</h3>

        <div className="ui last container">
          <div className="ui three steps">
            <div className="step">
              <div className="content">
                <div className="title">Shipping</div>
                <div className="description">Choose your shipping options</div>
              </div>
            </div>
            <div className="active step">
              <div className="content">
                <div className="title">Billing</div>
                <div className="description">Enter billing information</div>
              </div>
            </div>
            <div className="disabled step">
              <div className="content">
                <div className="title">Confirm Order</div>
                <div className="description">Review your order details</div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h1>I am Responsive Layout</h1>
        <h3 className="ui center aligned header">Responsive Menu</h3>

        <div className="ui stackable container menu">
          <div className="item">
            <img src="assets/images/logo.png" alt="Logo" />
          </div>
          <div>
            <a href="/" className="item">
              Features
            </a>
            <a href="/" className="item">
              Testimonials
            </a>
            <a href="/" className="item">
              Sign-in
            </a>
          </div>
        </div>
        <hr />
        <div className="ui placeholder segment">
          <div className="ui two column very relaxed stackable grid">
            <div className="column">
              <div className="ui form">
                <div className="field">
                  <label>Username</label>
                  <div className="ui left icon input">
                    <input type="text" placeholder="Username" />
                    <i className="user icon" />
                  </div>
                </div>
                <div className="field">
                  <label>Password</label>
                  <div className="ui left icon input">
                    <input type="password" />
                    <i className="lock icon" />
                  </div>
                </div>
                <div className="ui blue submit button">Login</div>
              </div>
            </div>
            <div className="middle aligned column">
              <div className="ui big button">
                <i className="signup icon" />
                Sign Up
              </div>
            </div>
          </div>
          <div className="ui vertical divider">Or</div>
        </div>
      </div>
    );
  }
}

export default SemanticUi;

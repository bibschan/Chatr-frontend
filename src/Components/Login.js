import React, { Component } from "react";
import axios from "axios";
import "./stylesheet.css";
import Dashboard from "./Dashboard.js";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: { value: "" },
      password: { value: "" },
      id: { value: "" },
      loggedIn: false,
    };
    this.validateLogin = this.validateLogin.bind(this);
  }
  validateLogin = (e) => {
    e.preventDefault();
    const { state = {} } = this.props.location;
    const { prevLocation } = state;
    //request to the server
    axios
      .post(`http://localhost:3000/users/login/`, {
        password: this.state.password,
        email: this.state.email,
      })
      .then(
        (response) => {
          //console.log(response);
          //redirects into the dashboard if login is successful
          //console.log(response.data.data.id);
          if (response.data.message === "User Returned") {
            this.props.history.push(prevLocation || "/dashboard");
            //sending the user id to the dashboard component so it can retrieve the channels
            Dashboard.retrieveChannels(response.data.data.id);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <main className="login-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">Login</div>
                <div className="card-body">
                  <form onSubmit={this.validateLogin}>
                    <div className="form-group row">
                      <label
                        htmlFor="email"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        E-Mail or Username
                      </label>
                      <div className="col-md-6">
                        <input
                          type="text"
                          id="email"
                          className="form-control"
                          value={this.state.email.value}
                          onChange={this.handleInputChange}
                          name="email"
                          required
                          autoFocus
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="password"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Password
                      </label>
                      <div className="col-md-6">
                        <input
                          type="password"
                          id="password"
                          value={this.state.password.value}
                          onChange={this.handleInputChange}
                          className="form-control"
                          name="password"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-6 offset-md-4">
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" name="remember" /> Remember
                            Me
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 offset-md-4">
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                      <a href="#" className="btn btn-link">
                        Forgot Your Password?
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Login;

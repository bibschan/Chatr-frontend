import React, { Component } from "react";
import axios from "axios";
import "./stylesheet.css";

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: { value: "" },
      last_name: { value: "" },
      email_address: { value: "" },
      username: { value: "" },
      password: { value: "" },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.first_name);
    console.log(this.state.last_name);
    console.log(this.state.username);
    console.log(this.state.email_address);

    //aqui vai o request!
    axios
      .post("http://localhost:3000/users/", {
        firstName: this.state.first_name,
        lastName: this.state.last_name,
        username: this.state.username,
        password: this.state.password,
        email: this.state.email_address,
      })
      .then(
        (response) => {
          console.log(response);
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
      <main className="my-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">Register</div>
                <div className="card-body">
                  <form name="my-form" onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                      <label
                        htmlFor="first-name"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        First Name
                      </label>
                      <div className="col-md-6">
                        <input
                          type="text"
                          id="first_name"
                          className="form-control"
                          name="first_name"
                          value={this.state.first_name.value}
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="last-name"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Last Name
                      </label>
                      <div className="col-md-6">
                        <input
                          type="text"
                          id="last_name"
                          className="form-control"
                          name="last_name"
                          value={this.state.last_name.value}
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="email-address"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        E-Mail Address
                      </label>
                      <div className="col-md-6">
                        <input
                          type="text"
                          id="email_address"
                          className="form-control"
                          name="email_address"
                          value={this.state.email_address.value}
                          onChange={this.handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="username"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Username
                      </label>
                      <div className="col-md-6">
                        <input
                          type="text"
                          id="username"
                          className="form-control"
                          name="username"
                          value={this.state.username.value}
                          onChange={this.handleInputChange}
                          required
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
                          className="form-control"
                          name="password"
                          value={this.state.password.value}
                          onChange={this.handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-6 offset-md-4">
                      <button type="submit" className="btn btn-primary">
                        Register
                      </button>
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

export default Registration;

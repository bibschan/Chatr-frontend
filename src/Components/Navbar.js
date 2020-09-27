import React from "react";
import { Link } from "react-router-dom";

import "./stylesheet.css";

const Navbar = (props) => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      ></link>
      <title>CHATR</title>
      <div className="navbar navbar-expand-lg navbar-light navbar-laravel">
        <div className="container">
          <a className="navbar-brand" href="index.js">
            CHATR
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  value="login"
                  to="/login"
                  onClick={props.changeForm}
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  value="registration"
                  to="/registration"
                  onClick={props.changeForm}
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

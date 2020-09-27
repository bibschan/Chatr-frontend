import React from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashboard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formType: "Login" };
  }

  changeForm = (e) => {
    this.setState({
      formType: e.target.value,
    });
  };

  render() {
    return (
      <main>
        <Navbar />
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/dashboard" component={Dashboard} />
          <Route component={Error} />
        </Switch>
      </main>
    );
  }
}

export default App;

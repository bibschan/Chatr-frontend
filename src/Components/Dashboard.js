import React, { Component } from "react";
import axios from "axios";

import "./stylesheet.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryOne: false,
      categoryTwo: false,
      categoryThree: false,
      categoryFour: false,
    };
  }
   static retrieveChannels = (id) => {
    //get request using the userID
    axios.get(`http://localhost:3000/user_categories/getChannels/${id}`).then(
      (response) => {
        // console.log(response);
        if (response.data.message === "UserCategories found") {
          if (response.data.data.categoryOne) {
            this.setState({categoryOne: true});
            console.log(this.state.categoryOne);
          }
          //setState needs to be bound?
          if (response.data.data.categoryTwo) {
            this.setState({categoryTwo: true});
            console.log(this.categoryTwo);
          }
          if (response.data.data.categoryThree) {
            this.setState({categoryThree: true});
            console.log(this.categoryThree);
          }
          if (response.data.data.categoryFour) {
            this.setState({categoryFour: true});
            console.log(this.categoryFour);
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  getCategory = (id) => {
    console.log(id);
    axios.get(`http://localhost:3000/categories/${id}`).then(
      (response) => {
        console.log(response);
      },

      (error) => {
        console.log(error);
      }
    );
  };

  render() {
    return (
      <div>
        <div className="sidenav">
          <a href="#">My Profile</a>
          <a href="#">My Channels</a>
          <ul></ul>
          <a href="#"></a>
          <a href="#"></a>
        </div>

        {/* <div class="main"></div> */}
      </div>
    );
  }
}
export default Dashboard;

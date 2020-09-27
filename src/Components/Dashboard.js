import React, { Component } from "react";
import axios from "axios";

import "./stylesheet.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryOne: { value: false },
      categoryTwo: { value: false },
      categoryThree: { value: false },
      categoryFour: { value: false },
    };
  }
  static retrieveChannels = (id) => {
    //get request using the userID
    axios.get(`http://localhost:3000/user_categories/getChannels/${id}`).then(
      (response) => {
        //console.log(response);
        if (response.data.message === "UserCategories found") {
          if (response.data.data.categoryOne) {
            //this.setState((this.categoryOne.value = true));
            console.log(this.categoryOne);
          }
          //   if (response.data.data.categoryTwo) this.getCategory(2);
          //   if (response.data.data.categoryThree) this.getCategory(3);
          //   if (response.data.data.categoryFour) this.getCategory(4);
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
        <div class="sidenav">
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

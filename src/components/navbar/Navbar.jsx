import React, { Component } from "react";
import logo from "../../assets/logo.svg";

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="container">
          <div className="navbar_contents">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

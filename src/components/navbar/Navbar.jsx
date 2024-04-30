import React, { Component } from "react";
import logo from "../../assets/logo.svg";
import "../navbar/Navbar.css";

const links = ["Home", "About Us", "Menu", "Features", "Contact Us"];
const navLink = links?.map((e, i) => (
  <li key={i}>
    <a id={e}>{e}</a>
  </li>
));
export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="container">
          <div id="Navbar" className="navbar_contents">
            <div className="logo_links">
              <img src={logo} alt="logo" />
              <ul>{navLink}</ul>
            </div>
            <div className="book">
              <button>Booking Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

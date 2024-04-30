import React, { Component } from "react";
import "../about/About.css";
import about from "../../assets/about-image.png";

export class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="container">
          <div id="About" className="about_contents">
            <img src={about} alt="about" />
            <div className="about_texts">
              <h4>About Us</h4>
              <h3>
                Food Stalls with Persons but to Product marketing plane
                catlogues etc to.{" "}
              </h3>
              <p>
                There are many things are needed to start the Fast Food
                Business. You need not only Just Food Stalls with Persons but
                also equipment make your marketing plane Effective.
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

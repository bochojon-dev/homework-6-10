import React, { Component } from "react";
import "../testimonial/Testimonial.css";
import userImage from "../../assets/user-image.svg";
import rate from "../../assets/rating.svg";

export class Testimonial extends Component {
  render() {
    return (
      <div className="testimonial">
        <div className="container">
          <div className="testimonial_contents">
            <h4>TESTIMONIAL</h4>
            <h2>Making Food great again and again</h2>
            <p>
              You need not only Just Food Stalls with Persons but also
              specialized equipment, Skills to manage Customers, Effective
              Product catlogues etc to make your.
            </p>
            <img className="user_image" src={userImage} alt="user" />
            <p>
              You need not only Just Food Stalls with Persons but also
              specialized equipment, Skills to manage Customers, Effective
              Product catlogues etc to make your.
            </p>
            <img className="rate_us" src={rate} alt="rating" />
            <h5>Augusta W. Reynoso</h5>
            <h6>UI&UX DeSIGNER</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;

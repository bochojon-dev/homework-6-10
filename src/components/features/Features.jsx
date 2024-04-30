import React, { Component } from "react";
import "../features/Features.css";
import feature3 from "../../assets/feature3.svg";
import feature2 from "../../assets/feature2.svg";
import feature1 from "../../assets/feature1.svg";

export class Features extends Component {
  render() {
    return (
      <div className="features">
        <div className="container">
          <div id="Features" className="feature_contents">
            <h4>FEATURES</h4>
            <h2>Food with a New Passion</h2>
            <div className="feature_items">
              <div className="feature_item">
                <div className="feature_image img1">
                  <img src={feature1} alt="feature item" />
                </div>
                <h3>Quality Food</h3>
                <p>
                  It can be a very secure path to earn good money and make you
                  very successful creative entrepreneur.
                </p>
              </div>
              <div className="feature_item">
                <div className="feature_image img2">
                  <img src={feature2} alt="feature item" />
                </div>
                <h3>Food Delivery</h3>
                <p>
                  It can be a very secure path to earn good money and make you
                  very successful creative entrepreneur.
                </p>
              </div>
              <div className="feature_item">
                <div className="feature_image img3">
                  <img src={feature3} alt="feature item" />
                </div>
                <h3>Super Taste</h3>
                <p>
                  It can be a very secure path to earn good money and make you
                  very successful creative entrepreneur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;

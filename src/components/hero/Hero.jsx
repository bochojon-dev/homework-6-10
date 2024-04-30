import React, { Component } from "react";
import "../hero/Hero.css";
import hero from "../../assets/hero-image.jpg";

export class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="container">
          <div id="Hero" className="hero_contents">
            <div className="hero_texts">
              <h3>Making time a good time by making food the good food.</h3>
              <p>
                There are many things are needed to start the Fast Food
                Business. You need not only Just Food Stalls with Persons but
                also specialized equipment,
              </p>
              <div className="buttons">
                <button className="btn1">Order Now</button>
                <button className="btn2">Food Details</button>
              </div>
            </div>
            <img src={hero} alt="hero img" />
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;

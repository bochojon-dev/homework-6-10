import React, { Component } from "react";
import "../menu/MenuContents.css";

export class MenuContents extends Component {
  render() {
    return (
      <div className="menu">
        <div className="container">
          <div className="menu_contents">
            <h4>MENU</h4>
            <h2>Food Full of treaty Love</h2>
            <p>
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also
              specialized equipment, Skills to manage Customers.{" "}
            </p>
            <div className="menu_cards">
              <div className="menu_card">
                <img src={card1} alt="card img" />
                <div className="title">
                  <h3>Vegie Muffen</h3>
                  <h3>16$</h3>
                </div>
                <p>
                  There are many things are needed to start the Fast Food
                  Business.
                </p>
                <div className="rate">
                  <div className="add">
                    <p>+</p>
                  </div>
                  <img src={rating} alt="rate" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuContents;

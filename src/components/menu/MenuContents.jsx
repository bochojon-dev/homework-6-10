import React, { Component } from "react";
import "../menu/MenuContents.css";
import rating from "../../assets/rating.svg";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";
import card5 from "../../assets/card5.png";
import card6 from "../../assets/card6.png";

export class MenuContents extends Component {
  render() {
    return (
      <div className="menu">
        <div className="container">
          <div className="menu_contents">
            <h4>MENU</h4>
            <h2>Food Full of treaty Love</h2>
            <p className="description">
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also
              specialized equipment, Skills to manage Customers.{" "}
            </p>
            <div className="menu_cards">
              <div className="menu_card">
                <img className="card_image" src={card1} alt="card img" />
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
              <div className="menu_card">
                <img src={card2} alt="card img" />
                <div className="title">
                  <h3>Salads</h3>
                  <h3>12$</h3>
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
              <div className="menu_card">
                <img src={card3} alt="card img" />
                <div className="title">
                  <h3>Burger</h3>
                  <h3>10$</h3>
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
              <div className="menu_card">
                <img src={card4} alt="card img" />
                <div className="title">
                  <h3>Delmonico Steak dish</h3>
                  <h3>14$</h3>
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
              <div className="menu_card">
                <img src={card5} alt="card img" />
                <div className="title">
                  <h3>Egg Masala</h3>
                  <h3>9$</h3>
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
              <div className="menu_card">
                <img src={card6} alt="card img" />
                <div className="title">
                  <h3>Peach Melba dish</h3>
                  <h3>15$</h3>
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
            <button>Learn More</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuContents;

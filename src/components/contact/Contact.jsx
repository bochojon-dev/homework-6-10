import React, { Component } from "react";
import "../contact/Contact.css";

export class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="container">
          <div id="Contact" className="contact_contents">
            <h4>CONTACT</h4>
            <h2>
              Food Stalls with Persons but also specialized equipment, Skills to
              manage.
            </h2>
            <form action="">
              <div className="input">
                <input type="text" placeholder="Enter your message" />
                <button>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

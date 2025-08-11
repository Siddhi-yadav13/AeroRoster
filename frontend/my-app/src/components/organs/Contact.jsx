import React from "react";
import "../../styles/Contact.css";
import planeWindow from "../../../public/airplane-window.jpg"; // image path

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Left side */}
      <div className="left">
        <h1>Contact Us</h1>
        <p>
          Feel free to contact us, for any query.
        </p>

        <div className="form-group">
          <input type="email" placeholder="Enter a valid email address" />
          <input type="text" placeholder="Enter your Name" />
        </div>

        <div className="form-group">
          <input type="tel" placeholder="Enter your phone (e.g. +1 555 555)" />
          <input type="text" placeholder="mm/dd/yyyy" />
        </div>

        <textarea rows="3" placeholder="Enter your message"></textarea>
        <div className="contact-button">
        <button>Submit</button>
        </div>
      </div>

      {/* Right side */}
      <div className="right">
        <img src={planeWindow} alt="Plane Window" />
      </div>
    </div>
  );
};

export default Contact;



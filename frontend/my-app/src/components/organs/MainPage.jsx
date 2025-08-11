import React from "react";
import "../../styles/MainPage.css";

// If you placed images in public folder:
const planeImage = "../../../public/IndiGo-image-landing.jpg"; // full background
const logoImage = "/goindigo-img.png"; // logo
import StationPage from "./StationPage";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <>
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(${planeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logoImage} alt="Logo" style={{ height: "40px" }} />
        </div>
        <ul className="nav-links">
          <li>HOME</li>
          <li>HOW TO USE</li>
          <li>STATION ▾</li>
          <Link to="/contact"><li>CONTACT</li></Link>
        </ul>
        <Link to="/login" className="contact-btn">LOGIN</Link>
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <h1>
          WELCOME <br />
          <span className="small-text">TO</span>  <br />
          AERO-ROSTER 
          
        </h1>
        <p>Plan. Track. Fly smarter.</p>
        <div className="hero-buttons">
          <button className="learn-more">LEARN MORE</button>
          <button className="watch-video">CONTACT</button>
        </div>
      </div>
    </div>
    <StationPage/>
    </>
  );
}

export default MainPage;


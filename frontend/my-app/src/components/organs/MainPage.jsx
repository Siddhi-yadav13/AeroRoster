import React from "react";
import Navbar from "../molecules/Navbar";
import planeImage from "../../../public/airplaneImage.png";
import "../../styles/MainPage.css";

function MainPage(){
    return(
        <div>
            <Navbar/>
            <div className="main-container">
                <div className="left-section">
                    <h1>Welcome to AeroRoster</h1>
                    <p>Plan. Track. Fly smarter.</p>
                </div>
                <div className="right-section">
                    <img src={planeImage} alt="Plane" />
                </div>
            </div>
        </div>
    )
}

export default MainPage;
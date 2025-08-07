import react from "react";
import "../../styles/MainPage.css";

function Navbar(){
    return(
        <div>
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="IndiGo Logo" />
                </div>
                <ul className="navbar-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">How to Use</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Station</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
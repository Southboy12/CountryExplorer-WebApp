import React from "react";
import Logo from "../images/moon-outline.svg"

export default function Navbar() {
  return (
    <nav className="nav--body">
        <div className="container">
            <h3 className="nav--title">Where in the world?</h3>
            <div className="nav--darkmode">
                <img className="nav--logo" src={Logo} alt="dark mode logo" />
                <p className="logo--text">Dark Mode</p>
            </div>
        </div>
    </nav>
  );
}
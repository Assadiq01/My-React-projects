import React from "react";
import logo from '../logo.svg';

function Header() {
    return(
        <div className="header">
            <img src={logo} alt="logo"/><h1>MyReact - Project 2</h1>
        </div>
    )
}

export default Header
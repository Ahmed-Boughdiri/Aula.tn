import React from "react";
import "../layout/NavBar.css";
import { Link } from "gatsby";
import "../mobile/NavBar.css";

const NavBar = () =>{
    return (
        <div className="navbar">
            <img src={require("../images/official-logo.png")} className="logo" />
            <div className="nav">
                <div className="nav-item">
                    <Link to="/">Home</Link>
                </div>
                <div className="nav-item">
                    <Link to="/blog">Blog</Link>
                </div>
                <div className="nav-item">
                    <Link to="/about">About</Link>
                </div>
                <div className="nav-item">
                    <Link to="/support">Support</Link>
                </div>
                <div className="nav-item">
                    <Link to="/podcast">Podcast</Link>
                </div>
            </div>
            <div className="menu">
                <img src={require("../assets/menu.svg")} />
            </div>
        </div>
    )
}

export default NavBar;

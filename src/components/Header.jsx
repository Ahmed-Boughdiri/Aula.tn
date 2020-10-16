import { Link } from 'gatsby';
import React from 'react';
import "../layout/Header.css";

const Header = () => {
    return (
        <div className="header">
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
        </div>
    )
}

export default Header;

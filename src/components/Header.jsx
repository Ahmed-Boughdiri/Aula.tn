import { Link } from 'gatsby';
import React,{ useState } from 'react';
import "../layout/Header.css";
import "../mobile/header.css";

const Header = () => {
    const [navOpen,setNavOpen] = useState(false);
    const openNav = () =>{
        const nav = document.querySelector(".nav");
        if(!navOpen) {
            nav.style.display = "block";
            setNavOpen(true);
        } else {
            nav.style.display = "none";
            setNavOpen(false);
        }
    }
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
            <div className="menu" onClick={openNav}>
                <img src={require("../assets/menu.svg")} />
            </div>
        </div>
    )
}

export default Header;

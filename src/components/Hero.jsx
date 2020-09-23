import React from 'react';
import "../layout/Hero.css";
import { Link } from "gatsby";
import Header from "../components/Header";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-container">
                <img src={require("../images/hero-website-bg.png")} className="right-side" />
                <div className="left-side">
                    <h2>Aula.tn</h2>
                    <p>
                        Le premier platform pour apprendre le coding en ligne en Tunisie
                    </p>
                    <button>
                        <Link to="/">GET STARTED</Link>
                    </button>
                </div>
                <Header />
            </div>
        </div>
    )
}

export default Hero;

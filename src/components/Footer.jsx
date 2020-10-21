import React from 'react';
import "../layout/Footer.css";
import "../mobile/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="top-footer">
                <div className="top-footer-container">
                    <div className="footer-item">
                        <h5>Our Sections</h5>
                        <ul>
                            <li>Home</li>
                            <li>Télécharger</li>
                            <li>Sign in</li>
                            <li>Sign up</li>
                            <li>About</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h5>Our Services</h5>
                        <ul>
                            <li>Support</li>
                            <li>Forum</li>
                            <li>Télécharger</li>
                            <li>Articles</li>
                            <li>Podcasts</li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h5>Our Partners</h5>
                            <ul>
                                <li>Go My Code</li>
                                <li>OpenClassroom</li>
                                <li>CodeAcademy</li>
                                <li>Khan Academy</li>
                                <li>W3School</li>
                                <li>FreeCodeCamp</li>
                                <li>Udacity</li>
                            </ul>
                        </div>
                    <div className="footer-social-media">
                        <h5>Social Media</h5>
                        <div className="social-media-container">
                            <img src={require("../images/facebook.png")} />
                            <img src={require("../images/instagram.png")} />
                            <img src={require("../images/youtube.png")} />
                            <img src={require("../images/spotify.png")} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <p>&copy;Copy Right Reserved 2020</p>
            </div>
        </div>
    )
}

export default Footer;

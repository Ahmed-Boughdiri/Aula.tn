import React from 'react';
import "../layout/Banner.css";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-container">
                <div className="banner-content-wrapper">
                    <div className="banner-content">
                        <h3>Nous vous aidons à réaliser vos rêves:</h3>
                        <p>
                            Nous vous encadrons Dès le début de votre parcours d'apprentissage jusqu'à 
                            ce que vous réalisiez enfin votre rêve de devenir développeur
                        </p>
                    </div>
                </div>
                <img src={require("../images/banner-bg.png")} className="banner-img" />
            </div>
        </div>
    )
}

export default Banner;

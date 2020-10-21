import React from 'react';
import "../layout/Features.css";
import "../mobile/Features.css";

const Feature = ({ title, des, icon }) =>{
    return (
        <div className="feature">
            <div className="feature-icon">
                <img src={icon} />
            </div>
            <h4>{title}</h4>
            <p>
                {des}
            </p>
        </div>
    )
}

const Features = () => {
    return (
        <div className="features">
            <h2>pourquoi vous devez utiliser aula</h2>
            <div className="features-container">
                <Feature 
                    title="flexibilité du temps:"
                    des="choisir le meilleur moment pour faire vos séances dépend de votre 
                        emploi du temps, choisissez simplement 
                        l'heure et laissez le reste pour nous."
                    icon={require("../images/clock.png")}
                />
                <Feature 
                    title="choisissez votre instructeur:"
                    des="nous vous offrons la possibilité de choisir l'instructeur qui vous 
                        apprendra parmi notre grande variété d'experts dans tous les domaines informatiques."
                    icon={require("../images/teacher.png")}
                />
                <Feature 
                    title="mentorat complet:"
                    des="nous vous aiderons dans votre parcours d'apprentissage avec notre plateforme interactive 
                        et avec nos efforts énormes pour vous faire atteindre vos objectifs."
                    icon={require("../images/journey.png")}
                />
            </div>
        </div>
    )
}

export default Features;

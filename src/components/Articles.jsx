import React from 'react';
import "../layout/Articles.css";
import "../mobile/Articles.css";

const Article = ({ title, category, img, des, center=false }) =>{
    return (
        <div className="article-container">
            <div className="article">
                <div className="article-img" style={{backgroundImage: `url(${img})`, backgroundPosition: `${center && "center"}`}}></div>
                <div className="article-category">
                    <h6>{category}</h6>
                </div>
                <h3>{title}</h3>
                <p>
                    {des}
                </p>
                <button>READ MORE</button>
            </div>
        </div>
    )
}

const Articles = () => {
    return (
        <div className="articles">
            <h2>Nos Articles</h2>
            <div className="articles-container">
                <Article 
                    title="Javascript"
                    category="WEB"
                    img={require("../images/javascript.png")}
                    des="JavaScript est un langage de programmation qui 
                        ajoute de l'interactivité à votre site web 
                        (par exemple : jeux, réponses quand on clique sur un 
                        bouton ou des données entrées ..."
                />
                <Article 
                    title="React JS"
                    category="WEB"
                    img={require("../images/react.png")}
                    des="React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. 
                        Le but principal de cette bibliothèque est de faciliter 
                        la création d'application web monopage ."
                />
                <Article 
                    title="Swift"
                    category="MOBILE"
                    img={require("../images/swift.png")}
                    des="Swift est un langage à la fois rapide et efficace qui 
                        fournit des retours en temps réel et s'intègre naturellement 
                        au code Objective‑C existant. Les développeurs ..."
                    center={true}
                />
            </div>
        </div>
    )
}

export default Articles;

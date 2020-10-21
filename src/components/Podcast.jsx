import React from 'react';
import "../layout/Podcast.css";
import "../mobile/Podcast.css";

const Podcast = ({ title, des, img }) =>{
    return(
        <div className="podcast">
            <div className="thumbnail" style={{backgroundImage: `url(${img})`}}>
                <div className="overlay">
                    <img src={require("../images/play.png")} />
                </div>
            </div>
            <h3>{title}</h3>
            <p>
                {des}
            </p>
        </div>
    )
}

const Podcasts = () => {
    return (
        <div className="podcasts">
            <h2>Nos Podcasts</h2>
            <div className="podcasts-container">
                <Podcast 
                    title="Startup Story"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Iure, a quod error sint ad ullam voluptatem! Temporibus vero voluptas voluptatum."
                    img={require("../images/startup.jpg")}
                />
                <Podcast 
                    title="Tech Crunch"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Iure, a quod error sint ad ullam voluptatem! Temporibus vero voluptas voluptatum."
                    img={require("../images/tech.jpg")}
                />
                <Podcast 
                    title="The Web Hub"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Iure, a quod error sint ad ullam voluptatem! Temporibus vero voluptas voluptatum."
                    img={require("../images/web.jpg")}
                />
            </div>
        </div>
    )
}

export default Podcasts;

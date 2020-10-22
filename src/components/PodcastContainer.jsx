import React from "react"
import "../layout/PodcastContainer.css"
import "../mobile/PodcastContainer.css";
import podcasts from "../global/Podcasts";
import compress from "../global/Compress";

const Podcast = ({ title, content, image, link }) =>(
  <div className="podcast-container">
    <div className="podcast-card">
      <div className="podcast-card-img" style={{backgroundImage: `url(${image})`}}></div>
      <h5>{title}</h5>
      <p>
        {compress(content, 150)}
      </p>
      <button>Voir Plus</button>
    </div>
  </div>
)

const PodcastContainer = () => {
  return (
    <div className="podcast-wrapper">
      <h4>Notre Podcast</h4>
      {
        podcasts.map(podcast =><Podcast title={podcast.title} link={podcast.link} image={podcast.image} content={podcast.content} />)
      }
    </div>
  )
}

export default PodcastContainer

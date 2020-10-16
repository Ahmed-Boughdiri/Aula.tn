import React from "react"
import "../layout/AboutContainer.css"

const AboutContainer = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-container-img">
          <img src={require("../images/logo.png")} />
        </div>
        <div className="about-container-desc">
          <h3>Who's Us?</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
            fugiat et. Non saepe, totam aut numquam corporis cumque illo veniam
            sapiente tempore, quaerat, nemo quam vitae quos nulla dolor dicta.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutContainer

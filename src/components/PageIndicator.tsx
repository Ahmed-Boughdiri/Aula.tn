import React from "react"
import "../layout/PageIndicator.css"

const PageIndicator = () => {
  return (
    <div className="page-indicator">
      <div className="page-indicator-container">
        <div className="indi">
          <svg
            enable-background="new 0 0 26 26"
            height="18px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 26 26"
            width="18px"
          >
            <g>
              <polygon
                fill="#231F20"
                points="23.885,0.58 25.969,2.664 15.133,13.5 25.969,24.336 23.885,26.42 10.965,13.5  "
              />
              <polygon
                fill="#231F20"
                points="12.885,0.58 14.969,2.664 4.133,13.5 14.969,24.336 12.885,26.42 -0.035,13.5  "
              />
            </g>
          </svg>
        </div>
        <div className="indi">1</div>
        <div className="indi">2</div>
        <div className="indi">3</div>
        <div className="indi">4</div>
        <div className="indi">
        <svg
            enable-background="new 0 0 26 26"
            height="18px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 26 26"
            width="18px"
            style={{transform: "rotate(180deg)"}}
          >
            <g>
              <polygon
                fill="#231F20"
                points="23.885,0.58 25.969,2.664 15.133,13.5 25.969,24.336 23.885,26.42 10.965,13.5  "
              />
              <polygon
                fill="#231F20"
                points="12.885,0.58 14.969,2.664 4.133,13.5 14.969,24.336 12.885,26.42 -0.035,13.5  "
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default PageIndicator

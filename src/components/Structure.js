import React from "react"
import SVG from "react-inlinesvg"
import weatherLogo from "../assets/weather-logo.svg"

export default ({ data }) => {
  return (
    <div className="container">
      <div className="header">
        <div className="icon-container">
          <SVG src={weatherLogo} />
        </div>
      </div>
      <div className="content">
        <div className="general-info">
          {data.name ? (
            <div className="status">{data.name}</div>
          ) : (
            <div className="status">Enter a Location</div>
          )}

          {data.name ? (
            <div className="location">{data.weather[0].description}</div>
          ) : (
            <div className="location">To Know The Current Weather</div>
          )}
        </div>
        <div className="detail-section">
          <div className="detail">
            <div className="title">Temperature</div>
            <div className="value">{data.main ? data.main.temp : "TBD"}</div>
          </div>
          <div className="detail bordered">
            <div className="title">Humidity</div>
            <div className="value">
              {data.main ? data.main.humidity : "TBD"}
            </div>
          </div>
          <div className="detail">
            <div className="title">Pressure</div>
            <div className="value">
              {data.main ? data.main.pressure : "TBD"}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

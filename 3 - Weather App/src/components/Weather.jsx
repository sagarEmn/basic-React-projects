import React from "react";
import "./Weather.css";

// import images
import search_icon from "../assets/images/search.png";
import clear_icon from "../assets/images/clear.png";
import cloud_icon from "../assets/images/cloud.png";
import drizzle_icon from "../assets/images/drizzle.png";
import rain_icon from "../assets/images/rain.png";
import snow_icon from "../assets/images/snow.png";
import wind_icon from "../assets/images/wind.png";
import humidity_icon from "../assets/images/humidity.png";

function Weather() {
  return (
    <main className="weather">
      <section className="search-bar">
        <input type="text" name="city" placeholder="search" />
        <img src={search_icon} alt="" />
      </section>
      <section className="weather-details">
        <img src={clear_icon} alt="" className="weather-icon" />
        <p className="temperature">16 C</p>
        <p className="location">London</p>
      </section>

      <section className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="" />
          <div>
            <p>91 %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="" />
          <div>
            <p>3.6 Km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Weather;

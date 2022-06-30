import React from "react";
import "./Weather.css";
import Forecast from "./Forecast";

export default function Weatehr(props) {
  return (
    <div className="Weather">
      <input id="search-input" type="text" placeholder="Type a city.." />
      <button className="search-button">Search</button>
      <div className="top-row">
        <div className="col">
          <h2>{props.city}</h2>
          <p>
            Last updated: {props.date} {props.time}
          </p>
          <p>{props.condition}</p>
        </div>
      </div>
      <div className="row">
        <div className="row">
          <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" />
          <h1 className="temp">{props.temp}</h1>
          <div className="col">
            <a href="/">°C</a>|<a href="/">°F</a>
            <p>Cloudy</p>
          </div>
        </div>
        <div className="other-info">
          <p>Humidity: {props.humidity}%</p>
          <p>Wind: {props.windspeed} km/h</p>
        </div>
      </div>
      <div className="row forecast">
        <Forecast date="Wed" temp="18" condition="rain" />
        <Forecast date="Thu" temp="20" condition="rain" />
        <Forecast date="Fri" temp="17" condition="rain" />
        <Forecast date="Sat" temp="15" condition="rain" />
        <Forecast date="Sun" temp="22" condition="rain" />
      </div>
    </div>
  );
}

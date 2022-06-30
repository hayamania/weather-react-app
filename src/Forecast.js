import React from "react";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <h3>{props.date}</h3>
      <img src="https://ssl.gstatic.com/onebox/weather/64/rain.png" />
      <h3>{props.temp}°C</h3>
    </div>
  );
}

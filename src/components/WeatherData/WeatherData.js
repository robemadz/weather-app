import React from "react";
import "./WeatherData.css";

export default function WeatherData(props) {
  return (
    <section
      className={
        typeof props.weather.main != "undefined"
          ? props.weather.main.temp < 16
            ? "weatherBox cold"
            : "weatherBox"
          : "weatherBox"
      }
    >
      <h1 className="temp">{Math.round(props.weather.main.temp)}ºC</h1>
      <span>-</span>
      <h3 className="weather">{props.weather.weather[0].main}</h3>
    </section>
  );
}

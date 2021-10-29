import React from "react";
import "./WeatherData.css";

export default function WeatherData() {
  return (
    <section className="weatherBox">
      <h1 className="temp">16º</h1>
      <span>-</span>
      <h3 className="weather">Sunny</h3>
    </section>
  );
}

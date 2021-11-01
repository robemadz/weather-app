import React from "react";
import "./WarmImg.css";
import sun from "../../assets/sun.png";

export default function WarmImg(props) {
  return (
    <img
      className={
        typeof props.weather.main != "undefined"
          ? props.weather.main.temp < 16
            ? "disabled"
            : "warmImg warm"
          : "disabled"
      }
      src={sun}
      alt="sun icon"
    />
  );
}

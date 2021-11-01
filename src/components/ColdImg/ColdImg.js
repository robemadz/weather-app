import React from "react";
import "./ColdImg.css";
import snowflake from "../../assets/snowflake.png";

export default function ColdImg(props) {
  return (
    <img
      className={
        typeof props.weather.main != "undefined"
          ? props.weather.main.temp < 16
            ? "coldImg cold"
            : "disabled"
          : "disabled"
      }
      src={snowflake}
      alt="snowflake icon"
    />
  );
}

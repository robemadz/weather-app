import React from "react";
import "./DataSection.css";

function DataSection(props) {
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
  };
  return (
    <section
      className={
        typeof props.weather.main != "undefined"
          ? props.weather.main.temp < 16
            ? "dataBox cold"
            : "dataBox"
          : "dataBox"
      }
    >
      <div className="dateBox">{dateBuilder(new Date())}</div>
      <div className="locationBox">
        <h2 className="city">
          {props.weather.name}
          <span className="country">{props.weather.sys.country}</span>
        </h2>
      </div>
    </section>
  );
}

export default DataSection;

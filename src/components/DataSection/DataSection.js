import React from "react";
import "./DataSection.css";

export default function DataSection() {
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
    <section className="dataBox">
      <div className="dateBox">{dateBuilder(new Date())}</div>
      <div className="locationBox">
        <h2 className="city">
          New York <span className="country">USA</span>
        </h2>
      </div>
    </section>
  );
}

import React from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
  return (
    <section className="searchBox">
      <input
        type="text"
        className={
          typeof props.weather.main != "undefined"
            ? props.weather.main.temp < 16
              ? "searchBar cold"
              : "searchBar"
            : "searchBar"
        }
        placeholder="Search city..."
        onChange={(e) => props.setLocation(e.target.value)}
        value={props.location}
        onKeyPress={props.search}
      />
    </section>
  );
}

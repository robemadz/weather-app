import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import DataSection from "./components/DataSection/DataSection";
import WeatherData from "./components/WeatherData/WeatherData";

function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(
        `${process.env.REACT_APP_BASE_URL}weather?q=${location}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          console.log(result);
          setLocation("");
        });
    }
  };

  const searchBtn = () => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}weather?q=${location}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
        setLocation("");
      });
  };

  return (
    <main
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp < 16
            ? "main cold"
            : "main"
          : "main"
      }
    >
      <SearchBar
        searchBtn={searchBtn}
        search={search}
        location={location}
        setLocation={setLocation}
        weather={weather}
      />
      {typeof weather.main != "undefined" ? (
        <>
          <DataSection weather={weather} />
          <WeatherData weather={weather} />
        </>
      ) : (
        ""
      )}
    </main>
  );
}

export default App;

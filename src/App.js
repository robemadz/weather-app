import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import DataSection from "./components/DataSection/DataSection";
import WeatherData from "./components/WeatherData/WeatherData";

function App() {
  return (
    <main className="main">
      <SearchBar />
      <DataSection />
      <WeatherData />
    </main>
  );
}

export default App;

import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <section className="searchBox">
      <input type="text" className="searchBar" placeholder="Search city..." />
    </section>
  );
}

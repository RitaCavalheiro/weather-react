import React from "react";
import "./Styles.css";

export default function Search() {
  return (
    <form id="city-seach-form">
      <div className="row">
        <div className="col-5 search-box">
          <input
            type="search"
            className="input_search"
            placeholder="Enter a City"
            id="search-text-input"
          />
        </div>
        <div className="col-2 button">
          <button className="search" id="searchCity">
            Search
          </button>
        </div>
        <div className="col-4 button">
          <button className="location" id="currentCity">
            Current City
          </button>
        </div>
      </div>
    </form>
  );
}

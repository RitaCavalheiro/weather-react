import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Search from "./Search";
import Weather from "./Weather";

function App() {
  return (
    <div className="container">
      <Search />
      <Weather />
    </div>
  );
}

export default App;

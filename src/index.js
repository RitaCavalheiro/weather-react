import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <p class="gitLink">
      <a
        href="https://github.com/RitaCavalheiro/weather-react/tree/master/src"
        target="_blank"
        rel="noopener noreferrer"
        class="gitLink"
      >
        Open-source code
      </a>
      by Rita Cavalheiro
    </p>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

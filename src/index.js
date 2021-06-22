import "./index.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { WeatherState } from "./components/Context/WeatherState";
import reportWebVitals from "./reportWebVitals";

require("dotenv").config();

ReactDOM.render(
  <React.StrictMode>
    <WeatherState>
      <App />
    </WeatherState>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

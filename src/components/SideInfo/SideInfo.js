import "./SideInfo.css";

import React, { useContext } from "react";

import { WeatherContext } from "../Context/WeatherContext";

export const SideInfo = () => {
  const { current_daily } = useContext(WeatherContext);
  const { current } = current_daily;
  return (
    <div className="container">
      <div className="bottom">
        <div className="text">
          <p>
            {current ? Math.floor(current.temp) : 0} <sup>ºC</sup>
          </p>
        </div>
      </div>

      <div className="top">
        <div className="over">
          <img
            src={
              current && current.weather
                ? `http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`
                : ""
            }
            alt="icon"
            height="50"
            width="50"
          />
        </div>
      </div>
    </div>
  );
};

import React, { useReducer } from "react";

import { WeatherContext } from "./WeatherContext";
import { WeatherReducer } from "./WeatherReducer";
import axios from "axios";

export const WeatherState = (props) => {
  const initialState = { current_daily: {}, current: {} };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  const getCurrentDailyWeather = async () => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=4.624335&lon=-74.063644&exclude=minutely,hourly&units=metric&appid=${process.env.REACT_APP_KEY}`
    );

    dispatch({
      type: "GET_CURRENT_DAILY_WEATHER",
      payload: res.data,
    });
  };

  const getCurrentWeather = async () => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=48.864716&lon=2.349014&exclude=minutely,hourly,daily&units=metric&appid=${process.env.REACT_APP_KEY}`
    );

    dispatch({
      type: "GET_CURRENT_WEATHER",
      payload: res.data,
    });
  };

  return (
    <WeatherContext.Provider
      value={{ ...state, getCurrentDailyWeather, getCurrentWeather }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

import { GET_CURRENT_DAILY_WEATHER, GET_CURRENT_WEATHER } from "../types";

export const WeatherReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_CURRENT_DAILY_WEATHER:
      return {
        ...state,
        current_daily: payload,
      };
    case GET_CURRENT_WEATHER:
      return {
        ...state,
        current: payload,
      };
    default:
      return state;
  }
};

import React, { useContext } from "react";

import { ForecastCard } from "./ForecastCard";
import { Title } from "../Title";
import { WeatherContext } from "../../Context/WeatherContext";

export const ForecastGroup = () => {
  const { current_daily } = useContext(WeatherContext);
  const { daily } = current_daily;

  return (
    <div style={{ margin: "1.5em", width: "250px" }}>
      <Title strong="3 Days" paragraph={"Forecast"} />

      {current_daily && daily ? (
        daily.slice(1, 4).map((e, index) => {
          return <ForecastCard key={index} data={e} />;
        })
      ) : (
        <div>
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
        </div>
      )}
    </div>
  );
};

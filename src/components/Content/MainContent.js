import { ForecastGroup } from "./Forecast/ForecastGroup";
import { Others } from "./Others/Others";
import { PlaceVisit } from "./PlaceVisit/PlaceVisit";
import React from "react";
import { Reviews } from "./Reviews/Reviews";

export const MainContent = () => {
  return (
    <main>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <ForecastGroup />
        <PlaceVisit />
        <Reviews />
        <Others />
      </div>
    </main>
  );
};

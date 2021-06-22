import { DetailedInfo } from "./DetailedInfo";
import { Locations } from "./Locations";
import React from "react";

export const Others = () => {
  return (
    <div style={{ margin: "1.5em", width: "270px", marginTop: "0.7em" }}>
      <DetailedInfo />
      <Locations />
    </div>
  );
};

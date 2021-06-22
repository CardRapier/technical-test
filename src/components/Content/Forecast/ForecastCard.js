import React from "react";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const ForecastCard = ({ data }) => {
  return (
    <div
      style={{
        display: "grid",
        borderRadius: 10,
        border: "1px solid #ccc",
        marginBottom: 10,
        overflow: "hidden",
        alignItems: "center",
        gridTemplateColumns: "20% 50% 30%",
        gridTemplateRows: 60,
      }}
    >
      <div style={{ padding: "1em", paddingLeft: ".5em" }}>
        <img
          src={
            data && data.weather
              ? `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
              : ""
          }
          alt="icon"
          height="50"
          width="50"
        />
      </div>

      <div style={{ padding: "1em" }}>
        <p style={{ fontSize: "18px", fontWeight: 500 }}>
          {data ? days[new Date(data.dt * 1000).getDay()] : "Monday"}
        </p>
        <p style={{ fontSize: "14px", opacity: "90%" }}>
          {data ? data.weather[0].main : "Sun"}
        </p>
      </div>

      <div>
        <b
          style={{
            padding: "1.3em",
            paddingLeft: "1.3em",
            backgroundColor: "#dce8f6",
            borderRadius: 10,
            fontWeight: 900,
          }}
        >
          {data
            ? `${Math.floor(data.temp.max)}/${Math.floor(data.temp.min)}`
            : "16/10"}
        </b>
      </div>
    </div>
  );
};

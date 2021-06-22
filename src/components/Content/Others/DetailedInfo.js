import React, { useContext } from "react";

import { WeatherContext } from "../../Context/WeatherContext";

const getWindDirection = (degrees) => {
  const directions = [
    "North",
    "Northeast",
    "East",
    "Southeast",
    "South",
    "Southwest",
    "West",
    "Northwest",
  ];

  degrees = (degrees * 8) / 360;

  degrees = Math.round(degrees, 0);

  degrees = (degrees + 8) % 8;

  return directions[degrees];
};

export const DetailedInfo = () => {
  const { current } = useContext(WeatherContext);
  return (
    <div
      style={{
        display: "grid",
        height: 90,
        borderRadius: 10,
        marginBottom: "1.5em",
        textAlign: "center",
        alignItems: "center",
        gridTemplateRows: "70% 30%",
        overflow: "hidden",
        boxShadow: "3px 3px 10px -6px black",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "25% 40% 7% 10%" }}>
        <div
          style={{
            padding: ".9em",
            paddingRight: "1em",
            backgroundColor: "#dce8f6",
            borderRadius: 10,
          }}
        >
          <img
            src={
              current && current.current
                ? `http://openweathermap.org/img/wn/${current.current.weather[0].icon}@2x.png`
                : ""
            }
            alt="icon"
            height="35"
            width="35"
          />
        </div>

        <b
          style={{
            fontSize: 30,
            marginTop: ".6em",
            fontWeight: 500,
          }}
        >
          {current && current.current ? current.current.temp : "8"}
          <sup style={{ fontSize: 8, top: "-1em", position: "relative" }}>
            ºC
          </sup>
        </b>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingRight: "1em",
          }}
        >
          <div
            style={{
              borderLeft: "0.7px solid grey",
              opacity: "30%",
              height: "1.5em",
            }}
          />
        </div>

        <div style={{ textAlign: "left" }}>
          <b
            style={{
              fontSize: 20,
              fontWeight: 900,
              top: "1em",
              position: "relative",
            }}
          >
            Paris
          </b>
          <br></br>
          <b
            style={{
              fontSize: 10,
              bottom: "-1em",
              position: "relative",
              opacity: "90%",
            }}
          >
            FR
          </b>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          textAlign: "center",
          alignItems: "center",
          gridTemplateColumns: "15% 25% 30% 20% 15%",
          fontSize: 11,
          paddingTop: 8,
          paddingBottom: 8,
          opacity: "60%",
        }}
      >
        <span></span>
        {current && current.current ? (
          <React.Fragment>
            <p>Humidity {current.current.humidity}%</p>
            <p>{getWindDirection(current.current.wind_deg)}</p>
            <p>{current.current.wind_speed}km/h</p>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <p>Humidity 71%</p>
            <p>West</p>
            <p>1.54km/h</p>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

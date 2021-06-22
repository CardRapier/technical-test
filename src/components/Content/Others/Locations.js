import React from "react";

export const Locations = () => {
  return (
    <div
      style={{
        display: "grid",
        borderRadius: 10,
        border: "1px dashed #ccc",
        textAlign: "center",
        alignItems: "center",
        overflow: "hidden",
        verticalAlign: "middle",
        gridTemplateRows: "30% 70%",
        width: "100%",
      }}
    >
      <div style={{ paddingBottom: ".5em", paddingTop: ".5em" }}>
        <button
          style={{
            borderRadius: 15,
            backgroundColor: "#f0eefa",
            border: "none",
            height: 24,
            width: 130,
            fontSize: 12,
            color: "#31328e",
          }}
        >
          Add Locations
        </button>
      </div>
      <div>
        <img
          src="https://images.all-free-download.com/images/graphiclarge/city_background_high_buildings_icons_colored_flat_design_6836743.jpg"
          width="130"
          alt="city"
        ></img>
      </div>
    </div>
  );
};

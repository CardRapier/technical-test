import { ImageContainer } from "../ImageContainer";
import React from "react";

export const Banner = () => {
  return (
    <header>
      <div style={{ margin: "1em", marginLeft: "2em" }}>
        <ImageContainer
          backgroundImage="https://bogota.gov.co/sites/default/files/styles/1050px/public/eventos/2020-01/bogot-la-candelaria_3349326043_o.jpg"
          heightImage="300px"
          fontSize="40px"
          srcIcon="icons/icons8-marcador-100.png"
          height="50"
          width="50"
          city="Bogotá"
          description=""
          colorText="#31328e"
          borderRadius="25px"
          top="20%"
          left="5%"
        />
      </div>
    </header>
  );
};

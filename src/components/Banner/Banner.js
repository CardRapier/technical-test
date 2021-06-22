import { ImageContainer } from "../ImageContainer";
import React from "react";

export const Banner = () => {
  return (
    <header>
      <div style={{ margin: "1em", marginLeft: "2em" }}>
        <ImageContainer
          backgroundImage="https://i.ibb.co/gDGn1FF/bogot-la-candelaria-3349326043-o-min.jpg"
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

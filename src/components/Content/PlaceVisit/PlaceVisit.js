import { ImageContainer } from "../../ImageContainer";
import React from "react";
import { Title } from "../Title";

export const PlaceVisit = () => {
  return (
    <div style={{ margin: "1.5em", width: "100%", maxWidth: "275px" }}>
      <Title strong="Place to" paragraph="visit" />
      <ImageContainer
        backgroundImage="https://live.staticflickr.com/65535/50789408612_9e5f249fec_b.jpg"
        heightImage="205px"
        fontSize="12px"
        srcIcon="icons/icons8-marcador-100.png"
        height="20"
        width="20"
        city="Arab Street"
        description="Singapore"
        colorText="#EFEDEB"
        top="3%"
        left="3%"
        borderRadius="20px"
      />
    </div>
  );
};

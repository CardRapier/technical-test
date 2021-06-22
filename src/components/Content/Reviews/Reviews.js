import { ImageContainer } from "../../ImageContainer";
import React from "react";
import { TopReviews } from "./TopReviews";

export const Reviews = () => {
  return (
    <div style={{ margin: "0.7em", width: "275px", marginTop: "2em" }}>
      <TopReviews />
      <div style={{ marginBottom: "1.5em" }}>
        <ImageContainer
          backgroundImage="https://live.staticflickr.com/65535/50789408612_9e5f249fec_b.jpg"
          heightImage="60px"
          fontSize="12px"
          srcIcon="icons/icons8-marcador-100.png"
          height="20"
          width="20"
          city="Arab Street"
          description="Singapore"
          colorText="#EFEDEB"
          top="3%"
          left="3%"
          borderRadius="15px"
        />
      </div>

      <div style={{ position: "relative" }}>
        <button
          style={{
            position: "absolute",
            top: 0,
            left: "17.3em",
            backgroundColor: "#31328e",
            height: "100%",
            borderRadius: "25px",
            width: 50,
            zIndex: 10,
            border: "none",
            color: "white",
          }}
        >
          +
        </button>

        <ImageContainer
          backgroundImage="https://live.staticflickr.com/65535/50789408612_9e5f249fec_b.jpg"
          heightImage="125px"
          fontSize="12px"
          srcIcon="icons/icons8-marcador-100.png"
          height="20"
          width="20"
          city="Arab Street"
          description="Singapore"
          colorText="#EFEDEB"
          top="3%"
          left="3%"
          borderRadius="15px"
        ></ImageContainer>
      </div>
    </div>
  );
};

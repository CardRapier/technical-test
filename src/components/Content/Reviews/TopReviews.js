import React from "react";

export const TopReviews = () => {
  return (
    <div
      style={{
        display: "grid",
        fontSize: 14,
        opacity: "60%",
        gridTemplateColumns: "50% 50%",
        marginBottom: "2em",
      }}
    >
      <div>
        <p>+ Top Reviews</p>
      </div>

      <div
        style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
        <img
          src="https://fashion.hola.com/imagenes/tendencias/2021011770873/selena-gomez-de-una-vez/0-313-974/selena-gomez-rare-beauty-a.jpg"
          alt=""
          height="20px"
          width="20px"
          style={{ borderRadius: "5px", marginRight: ".5em" }}
        ></img>
        <img
          src="https://fashion.hola.com/imagenes/tendencias/2021011770873/selena-gomez-de-una-vez/0-313-974/selena-gomez-rare-beauty-a.jpg"
          alt=""
          height="20px"
          width="20px"
          style={{ borderRadius: "5px", marginRight: ".5em" }}
        ></img>
        <img
          src="https://fashion.hola.com/imagenes/tendencias/2021011770873/selena-gomez-de-una-vez/0-313-974/selena-gomez-rare-beauty-a.jpg"
          alt=""
          height="20px"
          width="20px"
          style={{ borderRadius: "5px", marginRight: ".5em" }}
        ></img>

        <div
          style={{
            borderRadius: "5px",
            backgroundColor: "#7e68e7",
            height: "20px",
            width: "20px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 2,
              left: 2,
              fontSize: 10,
              color: "white",
            }}
          >
            6+
          </div>
        </div>
      </div>
    </div>
  );
};

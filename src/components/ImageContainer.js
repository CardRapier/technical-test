import React from "react";

export const ImageContainer = ({
  backgroundImage,
  heightImage,
  fontSize,
  srcIcon,
  height,
  width,
  city,
  description,
  top,
  left,
  colorText,
  borderRadius,
}) => {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          borderRadius: borderRadius,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: heightImage,
          backgroundPosition: "0% 80%",
        }}
      />
      <div
        style={{
          display: "flex",
          position: "absolute",
          top: top,
          left: left,
          fontSize: fontSize,
        }}
      >
        <img src={srcIcon} alt="icon" height={height} width={width} />
        <div style={{ display: "block" }}>
          <p style={{ marginTop: 3, color: colorText, fontWeight: 900 }}>
            {city}
          </p>
          <p style={{ color: colorText }}>
            <strong>{description}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

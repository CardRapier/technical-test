import React from "react";

export const Title = ({ strong, paragraph }) => {
  return (
    <div
      style={{
        display: "flex",
        fontSize: "28px",
        marginBottom: "1em",
      }}
    >
      <p>
        <strong>{strong}</strong> {paragraph}
      </p>
    </div>
  );
};

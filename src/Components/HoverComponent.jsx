import React from "react";

const HoverComponent = ({ Data }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 20,
        right: 20,
        background: "white",
        padding: 10,
        borderRadius: 5,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        zIndex: 999,
        backgroundColor: "#7358F7",
      }}
    >
      <p>{Data.data.label}</p>
    </div>
  );
};

export default HoverComponent;

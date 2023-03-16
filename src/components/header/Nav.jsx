import React from "react";

export const Nav = ({ text, color }) => {
  return (
    <div className="navText" style={{ color: color, whiteSpace: "nowrap" }}>
      {text}
    </div>
  );
};

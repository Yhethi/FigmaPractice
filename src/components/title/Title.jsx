import React from "react";
import "./title.css";
export const Title = ({ text1, text2 }) => {
  return (
    <div className="title">
      <p>{text1}</p>
      <h3>{text2}</h3>
    </div>
  );
};

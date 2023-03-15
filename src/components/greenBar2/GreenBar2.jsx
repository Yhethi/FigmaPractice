import React from "react";
import gb from "../../assets/img/greenBar/greenBar.png";
import "./greenBar2.css";

export const GreenBar2 = () => {
  return (
    <div className="greenBarContent">
      <img src={gb} alt={gb} srcSet={gb} />
      <h1>
        All our dreams can come true, if we have the courage to pursue them.
      </h1>
    </div>
  );
};

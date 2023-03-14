import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";

export const Cards = ({ img, text1, text2 }) => {
  return (
    <div className="card">
      <div className="imagen">
        <img src={img} alt={img} srcSet={img} />
        <AiOutlineInstagram className="instaIcon" />
      </div>

      <p className="text1">{text1}</p>
      <p className="text2">{text2}</p>
    </div>
  );
};

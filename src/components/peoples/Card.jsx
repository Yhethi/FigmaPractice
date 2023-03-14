import React from "react";
import { AiFillStar } from "react-icons/ai";

export const Card = ({ img, title, subTitle, text }) => {
  return (
    <div className="cardPeople">
      <div className="headCard">
        <img src={img} alt={img} />
        <div className="titleCard">
          <h1>{title}</h1>
          <h3>{subTitle}</h3>
        </div>
      </div>
      <div className="cardBody">
        <p>{text}</p>
        <AiFillStar style={{ color: "#FFBD3F" }} />
        <AiFillStar style={{ color: "#FFBD3F" }} />
        <AiFillStar style={{ color: "#FFBD3F" }} />
        <AiFillStar style={{ color: "#FFBD3F" }} />
        <AiFillStar style={{ color: "#FFBD3F" }} />
      </div>
    </div>
  );
};

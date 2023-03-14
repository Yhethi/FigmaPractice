import React from "react";
import { AiFillStar } from "react-icons/ai";

export const CourseCards = ({ img, tag, title, imgUser, nameUser }) => {
  return (
    <div className="cardCourse">
      <img src={img} alt={img} />
      <div className="bodyCard">
        <div className="marginLeft">
          <div className="tagPart">
            <div className="tag">{tag}</div>
            <div className="stars">
              <AiFillStar className="star" style={{ color: "#FFBD3F" }} />
              <AiFillStar className="star" style={{ color: "#FFBD3F" }} />
              <AiFillStar className="star" style={{ color: "#FFBD3F" }} />
              <AiFillStar className="star" style={{ color: "#FFBD3F" }} />
              <AiFillStar className="star" style={{ color: "#FFBD3F" }} />
            </div>
          </div>
          <h1>{title}</h1>
          <div className="userPart">
            <img src={imgUser} alt={imgUser} />
            <p>{nameUser}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

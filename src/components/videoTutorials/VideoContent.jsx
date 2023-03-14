import React from "react";
import pb from "../../assets/img/playButton.png";

export const VideoContent = ({ img, title, subTitle, clase }) => {
  return (
    <div className={`video ${clase}`}>
      <div className="shadowWindow">
        <img className="playButton" src={pb} alt={pb} srcSet={pb} />
      </div>
      <img className="imgBack" src={img} alt={img} srcset={img} />
      <div className="textVideo">
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
      </div>
    </div>
  );
};

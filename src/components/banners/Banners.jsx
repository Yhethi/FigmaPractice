import React from "react";
import "./banners.css";
import b1 from "../../assets/img/banners/banner1.png";
import b2 from "../../assets/img/banners/banner2.png";
import b3 from "../../assets/img/banners/banner3.png";
import b4 from "../../assets/img/banners/banner4.png";
import b5 from "../../assets/img/banners/banner5.png";

export const Banners = () => {
  return (
    <div className="contentBanner">
      <div className="cardBanner">
        <img className="imgBanner" src={b1} alt={b1} srcSet={b1} />
      </div>
      <div className="cardBanner">
        <img className="imgBanner" src={b2} alt={b2} srcSet={b2} />
      </div>
      <div className="cardBanner">
        <img className="imgBanner" src={b3} alt={b3} srcSet={b3} />
      </div>
      <div className="cardBanner">
        <img className="imgBanner" src={b4} alt={b4} srcSet={b4} />
      </div>
      <div className="cardBanner">
        <img className="imgBanner" src={b5} alt={b5} srcSet={b5} />
      </div>
    </div>
  );
};

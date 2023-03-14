import React from "react";
import gb from "../../assets/img/greenBar/greenBar.png";
import "./greenBar.css";

export const GreenBar = () => {
  return (
    <div className="greenBarContent">
      <img src={gb} alt={gb} srcSet={gb} />
      <h1>Subscribe And Membership our The Global Thinking</h1>
      <div className="btnSubscribe">
        <input
          type="text"
          name="inpt_subscribe"
          id="inpt_subscribe"
          placeholder="Type your email here"
        />
        <input id="btn_submit" type="button" value="SUBSCRIBE" />
      </div>
    </div>
  );
};

import React from "react";
import "./meet.css";
import m1 from "../../assets/img/meet/meet1.png";
import m2 from "../../assets/img/meet/meet2.png";
import m3 from "../../assets/img/meet/meet3.png";
import m4 from "../../assets/img/meet/meet4.png";
import m5 from "../../assets/img/meet/meet5.png";

import { Cards } from "./Cards";
import { Title } from "../title/Title";

export const Meet = () => {
  return (
    <div className="contentMeet">
      <div className="circle1_meet"></div>
      <div className="circle2_meet"></div>

      <Title
        text1={"Our Professionals"}
        text2={"Meet Our Professinoal Colleagues"}
      />
      <div className="contentCards">
        <Cards img={m1} text1={"Dr. Deepndra"} text2={"Advicer"} />
        <Cards img={m2} text1={"Kavi Chaturvedi"} text2={"Channel Manager"} />
        <Cards img={m3} text1={"Aaditya Pandey"} text2={"Video Editor"} />
        <Cards img={m4} text1={"Aayush Pandey"} text2={"Content Manager"} />
        <Cards img={m5} text1={"Sidhant Sharma"} text2={"Marketing Head"} />
      </div>
    </div>
  );
};

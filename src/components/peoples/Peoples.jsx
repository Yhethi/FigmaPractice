import React from "react";
import { Title } from "../title/Title";
import "./peoples.css";
import p1 from "../../assets/img/peoples/peoples1.png";
import p2 from "../../assets/img/peoples/peoples2.png";
import p3 from "../../assets/img/peoples/peoples3.png";
import p4 from "../../assets/img/peoples/peoples4.png";
import p5 from "../../assets/img/peoples/peoples5.png";
import h1 from "../../assets/img/peoples/h1.png";
import h2 from "../../assets/img/peoples/h2.png";

import { Card } from "./Card";

export const Peoples = () => {
  return (
    <div className="contentPeoples">
      <div className="head">
        <Title
          text1={"Our Fans's club"}
          text2={"What Peoples Said About The Global Thinking"}
          className="title"
        />
        <div className="flexMini">
          <img src={p1} alt={p1} srcSet={p1} />
          <img src={p2} alt={p2} srcSet={p2} />
          <img src={p3} alt={p3} srcSet={p3} />
          <img src={p4} alt={p4} srcSet={p4} />
          <img src={p5} alt={p5} srcSet={p5} />
        </div>
      </div>
      <div className="contentCards">
        <Card
          img={h1}
          title={"Sadiuqe Suaib"}
          subTitle={"Founder Of BL"}
          text={
            "The point could never have been exceptional than Put stock In Yourself and we could see the energy inside the assembly hall, Mr. Sharma ended up charging us all such a lot of that we are as yet living at that time. We are grateful to Mr. Adrash Pandey and his group for such an astounding show"
          }
        />
        <Card
          img={h1}
          title={"Sadiuqe Suaib"}
          subTitle={"Founder Of BL"}
          text={
            "The point could never have been exceptional than Put stock In Yourself and we could see the energy inside the assembly hall, Mr. Sharma ended up charging us all such a lot of that we are as yet living at that time. We are grateful to Mr. Adrash Pandey and his group for such an astounding show"
          }
        />
        <Card
          img={h2}
          title={"Mr.Ali Khan"}
          subTitle={"Businessman"}
          text={
            "Main aaj aapki vajah se is mein kam per hun sar Video dekh dekh kar maine mehnat kiya mehnat karne ka fal mujhe yah Mila"
          }
        />
      </div>
    </div>
  );
};

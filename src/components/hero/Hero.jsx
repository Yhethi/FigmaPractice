import React from "react";
import { IoMdArrowDropright, IoIosArrowForward } from "react-icons/io";
import HeroImg from "../../assets/img/HeroImg.png";
import Rocket from "../../assets/img/rocket.png";
import "./hero.css";
import pb from "../../assets/img/playButton.png";

export const Hero = () => {
  return (
    <div class="hero">
      <div className="textHero">
        <h1 className="titleHero">
          The Global <br></br>Thinking
        </h1>
        <p className="descriptionHero">
          You can get everything in life you want if you will just help enough
          other<br></br> people get what they want.
        </p>
        <div className="botonesHero">
          <button className=" bookConsultation">
            {"BOOK A CONSULTATION"}
            <IoIosArrowForward />
          </button>
          <button
            className=" 
            botonWatchVideo
        "
          >
            <div className="internoWatch">
              <img src={pb} alt={pb} srcset={pb} />
              <p className="textWatch">WATCH VIDEOS</p>
            </div>
          </button>
        </div>
      </div>
      <div className="rightHero">
        <img className="imgHero" src={HeroImg} alt="" />
        <img className="imgRocket" src={Rocket} alt="" />
      </div>
    </div>
  );
};

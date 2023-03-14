import React from "react";
import "./lifeBetter.css";
import l1 from "../../assets/img/lifeBetter/lifeBetter1.png";
import l2 from "../../assets/img/lifeBetter/lifeBetter2.png";
import b1 from "../../assets/img/lifeBetter/badge1.png";
import b2 from "../../assets/img/lifeBetter/badge2.png";

export const LifeBetter = () => {
  return (
    <div className="contentLife">
      <div className="left">
        <img className="img1" src={l1} alt={l1} srcset={l1} />
        <img className="img2" src={l2} alt={l2} srcset={l2} />
      </div>
      <div className="right">
        <div className="contentRight">
          <div className="texts">
            <h1>
              We Care About Your <span>Life For Better.</span>
            </h1>
            <p>
              My mission is to create a world where we can live in harmony with
              nature, Aadrsh Pandey is the founder of The Global Thinking An
              Influencer, Educator, Business Counselor, and Productive Business
              Eantruprinor, he’s a way sought- after speaker. These days he is
              one of the youngest Realistic Motivational Speakers in India. He
              conjures up and encourages peoples to appreciate their true
              potential. He has taken his dynamic person message to the opposite
              side of the world.
            </p>
          </div>
          <div className="badges">
            <h4>Aadrsh Pandey</h4>
            <div className="badge badge1">
              <div className="contentImg">
                <img src={b1} alt={b1} srcset={b1} />
              </div>
              <div className="badgeText">
                <h3>Master Certified Motivational speaker</h3>
                <p>I have stood on a mountain of no’s for one yes.</p>
              </div>
            </div>

            <div className="badge">
              <div className="contentImg">
                <img className="badgeImg2" src={b2} alt={b2} srcset={b2} />
              </div>
              <div className="badgeText">
                <h3>8+ Years Experince</h3>
                <p>
                  Wonderful 8 years of involvement and outcome in evolving
                  lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "./categories.css";
import c1 from "../../assets/img/categories/categories1.png";
import c2 from "../../assets/img/categories/categories2.png";
import c3 from "../../assets/img/categories/categories3.png";
import c4 from "../../assets/img/categories/categories4.png";

export const Categories = () => {
  return (
    <div className="contenedorCategories">
      <div className="cardCategories">
        <div className="contentCategories">
          <img src={c1} alt={c1} srcset={c1} />
          <h4>Book a Show</h4>
          <p>They are the most accessible and wisest of counselors</p>
        </div>
      </div>

      <div className="cardCategories">
        <div className="contentCategories">
          <img src={c2} alt={c2} srcset={c2} />
          <h4>Corporate Events</h4>
          <p>Success is not final; failure is not fatal</p>
        </div>
      </div>

      <div className="cardCategories">
        <div className="contentCategories">
          <img src={c3} alt={c3} srcset={c3} />
          <h4>Courses</h4>
          <p>you'll gain the in-depth knowledge and practical skills needed</p>
        </div>
      </div>
      <div className="cardCategories">
        <div className="contentCategories">
          <img src={c4} alt={c4} srcset={c4} />
          <h4>Other channels</h4>
          <p>
            Welcome to YouTube's official channel for Creators! Whether you post
            Videos,
          </p>
        </div>
      </div>
    </div>
  );
};

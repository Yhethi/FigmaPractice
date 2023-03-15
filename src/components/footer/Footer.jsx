import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="contentFooter">
      <div className="up">
        <div className="first">
          <p>Lucknow Uttar Pardesh -India</p>
          <p>+91-9348071770</p>
          <p>[email contact@theglobalthinking.com]</p>
          <div className="icons">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaYoutube />
          </div>
        </div>
        <div className="second">
          <h1>Our Motivation</h1>
          <p>Basic Life Motivation</p>
          <p>Advance Helath Motivation</p>
          <p>Advance Business Motivation</p>
        </div>
        <div className="third">
          <h1>About Us</h1>
          <p>Latest Courses</p>
          <p>Mission & Vision</p>
          <p>Our Approach</p>
          <p>Exclusive Advisors</p>
        </div>
        <div className="fourth">
          <h1>Apps Download</h1>
          <p>Coming Soon</p>
        </div>
      </div>
      <div className="down">
        <div className="copyright">
          © 2020 <span>Global Thinking</span>. All Rights Reserved, Design By
          Codeon
        </div>
      </div>
    </div>
  );
};

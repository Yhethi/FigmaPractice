import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Nav } from "./Nav";
import "./header.css";
import tg from "../../assets/img/tgtlogo.png";

const bookUs = "BOOK US";

export const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img className="logo" src={tg} alt={tg} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <Nav text="HOME" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Nav text="ABOUT US" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Nav text="COURSES" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Nav text="CONSULTING" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Nav text="SERVICES" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Nav text="CONTACTS" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Nav text="LOGIN" color="#00008B" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <button className="botonVerde">
        {bookUs}
        <IoIosArrowForward />
      </button>
    </div>

    // <div className="flex pt-[24.87px] xl:w-[100%] sm:w-[100vw] xl:justify-around xl:items-center sm:justify-between sm:items-center">
    //   <img
    //     className="h-[4.72px] xl:left-0 xl:pl-[75.55px]"
    //     src="/src/assets/img/tgtlogo.png"
    //     alt=""
    //   />
    //   <Nav text="HOME" />
    //   <Nav text="ABOUT US" />
    //   <Nav text="COURSES" />
    //   <Nav text="CONSULTING" />
    //   <Nav text="SERVICES" />
    //   <Nav text="CONTACTS" />
    //   <Nav text="LOGIN" color="text-[#00008B]" />
    //   <button className="items-center justify-center flex text-[8.70557px] w-[101.58px] h-[35.56px] right-0 bg-[#65CFA9] shadow-[0_0px_15.10913px_5.4365px_rgba(101,207,169,0.2)] font-['Nunito Sans'] text-white rounded-[4.97461px] ml-[49.18px] mr-[75.55px]">
    //     {bookUs}
    //     <IoIosArrowForward />
    //   </button>
    // </div>
  );
};

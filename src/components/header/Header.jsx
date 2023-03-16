import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Nav } from "./Nav";
import "./header.css";
import tg from "../../assets/img/tgtlogo.png";

const bookUs = "BOOK US";

export const Header = () => {
  return (
    // <div className="header">
    //   <nav className="navbar navbar-expand-lg">
    //     <div className="container-fluid">
    //       <a className="navbar-brand" href="/">
    //         <img className="logo" src={tg} alt={tg} />
    //       </a>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNavDropdown"
    //         aria-controls="navbarNavDropdown"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarNavDropdown">
    //         <ul className="navbar-nav">
    //           <li className="nav-item">
    //             <a className="nav-link active" aria-current="page" href="#">
    //               <Nav text="HOME" />
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">
    //               <Nav text="ABOUT US" />
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">
    //               <Nav text="COURSES" />
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">
    //               <Nav text="CONSULTING" />
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">
    //               <Nav text="SERVICES" />
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">
    //               <Nav text="CONTACTS" />
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">
    //               <Nav text="LOGIN" color="#00008B" />
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>

    //   <button className="botonVerde">
    //     {bookUs}
    //     <IoIosArrowForward />
    //   </button>
    // </div>

    <div className="header">
      <img className="logo" src={tg} alt={tg} />
      <div className="navTabs">
        <Nav text="HOME" />
        <Nav text="ABOUT US" />
        <Nav text="COURSES" />
        <Nav text="CONSULTING" />
        <Nav text="SERVICES" />
        <Nav text="CONTACTS" />
        <Nav text="LOGIN" color="#00008B" />
      </div>
      <button className="botonVerde">
        {bookUs}
        <IoIosArrowForward />
      </button>
    </div>
  );
};

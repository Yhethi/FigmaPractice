import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Nav } from "./Nav";

const bookUs = "BOOK US";

export const Header = () => {
  return (
    <div className="flex pt-[24.87px] w-[100%] justify-around items-center">
      <img
        className="h-[54.72px] right-[560.35px] left-0 pl-[75.55px]"
        src="/src/assets/img/tgtlogo.png"
        alt=""
      />
      <Nav text="HOME" />
      <Nav text="ABOUT US" />
      <Nav text="COURSES" />
      <Nav text="CONSULTING" />
      <Nav text="SERVICES" />
      <Nav text="CONTACTS" />
      <Nav text="LOGIN" color="text-[#00008B]" />
      <button className="items-center justify-center flex text-[8.70557px] w-[101.58px] h-[35.56px] right-0 bg-[#65CFA9] shadow-[0_0px_15.10913px_5.4365px_rgba(101,207,169,0.2)] font-['Nunito Sans'] text-white rounded-[4.97461px] ml-[49.18px] mr-[75.55px]">
        {bookUs}
        <IoIosArrowForward />
      </button>
    </div>

    // position: absolute;
    // width: 101.58px;
    // height: 35.56px;
    // right: 0px;
    // top: calc(50% - 35.56px/2 + 0px);

    // background: #65CFA9;
    // box-shadow: 0px 3.10913px 12.4365px rgba(101, 207, 169, 0.5);
    // border-radius: 4.97461px;
  );
};

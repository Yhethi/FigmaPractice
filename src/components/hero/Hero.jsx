import React from "react";
import { IoMdArrowDropright, IoIosArrowForward } from "react-icons/io";

export const Hero = () => {
  return (
    <div className="flex">
      <div className="ml-[75.55px] h-[500px] mt-[85.05px] flex flex-col w-[470px]">
        <h1 className="text-[55.9644px] font-[700] font-['arial']  leading-[67px] text-[#1B2336]">
          The Global <br></br>Thinking
        </h1>
        <p className="mt-[21.76px] text-[11.1929px]">
          You can get everything in life you want if you will just help enough
          other<br></br> people get what they want.
        </p>
        <div className="botons flex items-center gap-4 mt-[21.7px]">
          <button
            className=" 
        bg-[#4B83FB]
        rounded-[31.0913px]
        text-white
        font-['Nunito Sans']
        w-[164.95px]
        h-[35.56px]
        p-4
        flex
        items-center
        justify-center
        text-[8.70557px]
        "
          >
            {"BOOK A CONSULTATION"}
            <IoIosArrowForward />
          </button>
          <button
            className=" 
      
        rounded-[31.0913px]
        text-black
        font-['Nunito Sans']
 
       pl-1
        border-[1px]
        w-[115.16px]
        h-[33.01px]
        border-[#000000]
        "
          >
            <div className="flex items-center gap-3">
              <div className="bg-[#E70000] h-[27.18px] w-[27.18px] rounded-full">
                <span className="text-[20px] flex justify-center items-center h-full text-white">
                  <IoMdArrowDropright />
                </span>
              </div>
              <p className="text-[6.79549px] font-[700] flex">WATCH VIDEOS</p>
            </div>
          </button>
        </div>
      </div>
      <div className="mr-[75.55px] mt-[85.05px] grid place-content-center w-[470px]">
        <img
          className="object-contain w-[250.77px] h-[265.52px] drop-shadow-[0_0px_30px_rgba(101,207,169,1)]"
          src="/src/assets/img/HeroImg.png"
          alt=""
          srcset=""
        />
        <img
          className="absolute mt-[204.53px]"
          src="/src/assets/img/rocket.png"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};

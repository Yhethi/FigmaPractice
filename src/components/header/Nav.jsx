import React from "react";

export const Nav = ({ text, color }) => {
  return (
    <div className={`text-[8.70557px] font-[800] leading-[16px] ${color}`}>
      {text}
    </div>
  );
};

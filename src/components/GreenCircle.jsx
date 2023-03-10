import React from "react";

export const GreenCircle = ({ ancho, alto, color, customClass }) => {
  //   return <div className={`w-[100px]` + "h-[100px] bg-red-400"}></div>;
  //   const ancho = "100px";
  //   const alto = "100px";
  //   console.log(ancho, alto);
  return (
    <div
      className={`${ancho} ${alto} ${color} ${customClass} rounded-full absolute -z-10`}
    ></div>
  );
};

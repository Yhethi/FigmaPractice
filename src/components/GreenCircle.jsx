import React from "react";

export const GreenCircle = ({
  ancho,
  alto,
  color,
  mT,
  mL,
  mB,
  mR,
  blur,
  classText,
}) => {
  //   return <div className={`w-[100px]` + "h-[100px] bg-red-400"}></div>;
  //   const ancho = "100px";
  //   const alto = "100px";
  //   console.log(ancho, alto);
  return (
    <div
      className={classText}
      style={{
        borderRadius: "100%",
        width: ancho,
        height: alto,
        background: color,
        position: "absolute",
        zIndex: "-1",
        marginTop: mT,
        marginRight: mR,
        marginBottom: mB,
        marginLeft: mL,
        filter: blur,
        // filter: "drop-shadow(0px 0px 10px rgba(101, 207, 169, 1))",
      }}
    ></div>
  );
};

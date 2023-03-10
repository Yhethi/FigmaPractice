import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header } from "./components/header/Header";
import { GreenCircle } from "./components/GreenCircle";
import { Hero } from "./components/hero/Hero";

function App() {
  const [count, setCount] = useState(0);
  // bg-[#FF000011]
  return (
    <div className="flex justify-center">
      <div className="max-w-[940px]  relative flex  flex-col overflow-hidden">
        <div className="max-w-[940px] h-full">
          <GreenCircle
            customClass="w-[400px] h-[400px] mt-[-150px] ml-[-130px] blur-[80px]"
            ancho="w-[36vw]"
            alto="h-[36vh]"
            color="bg-[#65CFA9]"
          />
          <GreenCircle
            customClass="mt-[123.99px] ml-[480.33px]
          bg-gradient-to-t from-[#65CFA9] to-[#FFFFFF99]
          "
            ancho="w-[62.18px]"
            alto="h-[62.18px]"
            color="bg-[#65CFA9]"
          />
          <GreenCircle
            customClass="mt-[88.54px] ml-[755.8px]
          bg-gradient-to-t from-[#65CFA9] to-[#FFFFFF99]
          "
            ancho="w-[29.85px]"
            alto="h-[29.85px]"
            color="bg-[#65CFA9]"
          />
        </div>

        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { GreenCircle } from "./components/GreenCircle";
import { Hero } from "./components/hero/Hero";
import { Banners } from "./components/banners/Banners";
import { Categories } from "./components/categories/Categories";
import { LifeBetter } from "./components/lifeBetter/LifeBetter";
import { Meet } from "./components/meet/Meet";
import { GreenBar } from "./components/greenBar/GreenBar";
import { VideoTutorials } from "./components/videoTutorials/VideoTutorials";
import { Peoples } from "./components/peoples/Peoples";
import { Course } from "./components/courses/Course";
import { GreenBar2 } from "./components/greenBar2/GreenBar2";
import { Footer } from "./components/footer/Footer";

function App() {
  // const [count, setCount] = useState(0);
  // bg-[#FF000011]
  return (
    <div className="flex justify-center">
      <div className="bodyInterno">
        <div className="max-w-[940px] h-full">
          <GreenCircle
            className="green1"
            mT="-200px"
            mR=""
            mB=""
            mL="-200px"
            blur="blur(90px)"
            ancho="400px"
            alto="400px"
            color="#65CFA9"
          />
          {/* bg-gradient-to-t from-[#65CFA9] to-[#FFFFFF99] */}
          <GreenCircle
            mT="123.99px"
            mR=""
            mB=""
            mL="480.33px"
            ancho="62.18px"
            alto="62.18px"
            color="#65CFA9"
          />
          <GreenCircle
            mT="88.54px"
            mR=""
            mB=""
            mL="755.8px"
            ancho="29.85px"
            alto="29.85px"
            color="#65CFA9"
          />
        </div>

        <Header />
        <Hero />
        <Banners />
        <Categories />
        <LifeBetter />
        <Meet />
        <GreenBar />
        <VideoTutorials />
        <Peoples />
        <Course />
        <GreenBar2 />
        <Footer />
      </div>
    </div>
  );
}

export default App;

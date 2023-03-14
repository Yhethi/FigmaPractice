import React from "react";
import { Title } from "../title/Title";
import { VideoContent } from "./VideoContent";
import "./videoTutorials.css";
import v1 from "../../assets/img/videoTutorials/videoTutorials1.png";
import v2 from "../../assets/img/videoTutorials/videoTutorials2.png";
import v3 from "../../assets/img/videoTutorials/videoTutorials3.png";
import v4 from "../../assets/img/videoTutorials/videoTutorials4.png";
import v5 from "../../assets/img/videoTutorials/videoTutorials5.png";
import v6 from "../../assets/img/videoTutorials/videoTutorials6.png";
import v7 from "../../assets/img/videoTutorials/videoTutorials7.png";

export const VideoTutorials = () => {
  return (
    <div className="contentVideoTutorials">
      <Title
        text1={"Video gallery"}
        text2={"We Provide Life-Changing Video Tutorials"}
        className="title"
      />
      <div className="contentVideosFlex">
        <div className="arriba">
          <VideoContent
            img={v1}
            title={"Podcast With Amit Mishra"}
            subTitle={"Adrash Pandey"}
            clase="arriba1"
          />
          <VideoContent
            img={v2}
            title={"How To Control Your Mind"}
            subTitle={"Adrash Pandey"}
            clase="arriba2"
          />
          <VideoContent
            img={v3}
            title={"This Formula Will Change Your Life"}
            subTitle={"Adrash Pandey "}
            clase="arriba3"
          />
        </div>
        <div className="abajo">
          <VideoContent
            img={v4}
            title={"Billionaires Mindset"}
            subTitle={"Adrash Pandey"}
            clase="abajo"
          />
          <VideoContent
            img={v5}
            title={"How To Choose A Career"}
            subTitle={"Adrash Pandey "}
            clase="abajo"
          />
          <VideoContent
            img={v6}
            title={"Adrash Pandey Show"}
            subTitle={"Adrash Pandey"}
            clase="abajo"
          />
          <VideoContent
            img={v7}
            title={"Pyar Vs Paisa"}
            subTitle={"Adrash Pandey"}
            clase="abajo"
          />
        </div>
      </div>
    </div>
  );
};

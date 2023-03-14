import React from "react";
import "./courses.css";
import { Title } from "../title/Title";
import { CourseCards } from "./CourseCards";
import c1 from "../../assets/img/course/course1.png";
import c2 from "../../assets/img/course/course2.png";
import c3 from "../../assets/img/course/course3.png";
import ui from "../../assets/img/course/userImg.png";

export const Course = () => {
  return (
    <div className="contentCourse">
      <Title
        text1={"Popular Courses"}
        text2={"We Provide Professional Courses"}
        className="title"
      />
      <div className="contentCourseCards">
        <CourseCards
          img={c1}
          tag={"Business"}
          title={"Smart Study Tips"}
          imgUser={ui}
          nameUser={"By Adarsh Pandey"}
        />

        <CourseCards
          img={c2}
          tag={"Lifestyle"}
          title={"Mastering Communication Skills"}
          imgUser={ui}
          nameUser={"By Adarsh Pandey"}
        />

        <CourseCards
          img={c3}
          tag={"Business"}
          title={"How to Train your Brain"}
          imgUser={ui}
          nameUser={"By Adarsh Pandey"}
        />
      </div>
    </div>
  );
};

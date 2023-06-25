import React from "react";
import Course from "../components/CourseDetails/Course/Course";
import Footers from "../components/Home/Footers";
import Header from "../components/Home/Header";
import Syllabus from "../components/CourseDetails/syllabus";

const CourseDetails = () => {
  return (
    <div className="App1">
      <Header />
      <Course />
      <Syllabus />
      <Footers />
    </div>
  );
};

export default CourseDetails;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CourseDetails/Course/Course.css";

function Syllabus() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from the backend API
    axios
      .get("http://localhost:8000/syllabus")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <div>
      <h1>Syllabus</h1>
      <table className="table-container">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Syllabus Link</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.course_name}</td>
              <td>
                <a
                  href={course.syllabus}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {course.syllabus}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Syllabus;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CourseDetails/Course/Course.css";

function Syllabus() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
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
      <h4 className="h4">Syllabus</h4>
      <table className="table-container">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Syllabus Link</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.int}>
              <td>{course.course_name}</td>
              <td>
                <a
                  href={course.syllabus}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Syllabus {course.course_name}
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

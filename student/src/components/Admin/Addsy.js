// AddSyllabusPage.js
import React, { useState } from "react";
import axios from "axios";

const AddSyllabusPage = () => {
  const [courseName, setCourseName] = useState("");
  const [syllabusContent, setSyllabusContent] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/addsyllabus", {
        course_name: courseName,
        syllabus: syllabusContent,
      })
      .then((response) => {
        console.log("Syllabus added successfully");
        // You can redirect to the syllabus page or perform any other action after adding the syllabus
      })
      .catch((error) => {
        console.log("Error adding syllabus:", error);
      });
  };

  return (
    <div>
      <h5 className="admin-dashboard-section-title">Add Syllabus</h5>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="syllabusContent">Syllabus:</label>
          <textarea
            id="syllabusContent"
            value={syllabusContent}
            onChange={(e) => setSyllabusContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Syllabus</button>
      </form>
    </div>
  );
};

export default AddSyllabusPage;

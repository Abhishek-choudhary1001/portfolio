import React from "react";
import "./Experience.css";

const Experience = ({ darkMode }) => {
  return (
    <div className="experience-container" id="experience">
      <div className="achievement">
        <div
          className="achievement-circle"
          style={{ color: darkMode ? "#fca311" : "#333" }}
        >
          1
        </div>
        <span className="achievement-label" style={{ color: darkMode ? "#fff" : "#555" }}>
          Year
        </span>
        <span className="achievement-title">Experience with projects</span>
      </div>

      <div className="achievement">
        <div
          className="achievement-circle"
          style={{ color: darkMode ? "#fca311" : "#333" }}
        >
          50+
        </div>
        <span className="achievement-label" style={{ color: darkMode ? "#fff" : "#555" }}>
          Completed
        </span>
        <span className="achievement-title">Projects</span>
      </div>
      <div className="achievement">
        <div
          className="achievement-circle"
          style={{ color: darkMode ? "#fca311" : "#333" }}
        >
          2
        </div>
        <span className="achievement-label" style={{ color: darkMode ? "#fff" : "#555" }}>
          Companies
        </span>
        <span className="achievement-title">Work as an internship</span>
      </div>
    </div>
  );
};

export default Experience;

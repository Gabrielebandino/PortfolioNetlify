import React from "react";
import Chip from "@mui/material/Chip";
import "../assets/styles/Education.scss";

// University logos
import unicaLogo from "../assets/images/unica.svg";
import polimiLogo from "../assets/images/polimi.svg";

const labelsMSc = [
  "Parallel Computing",
  "Advanced Computer Architectures",
  "Natural Language Processing",
  "Recommender Systems",
  "High Performance Computing",
];

const labelsBSc = [
  "Machine Learning",
  "Deep Learning",
  "Big Data",
  "Computational Statistics",
  "Algorithms & Data Structures",
  "Computer Vision",
];

function Education() {
  return (
    <div className="container" id="education">
      <div className="education-container">
        <h1 className="section-title education">Education</h1>
        <div className="education-grid">
          {/* MSc */}
          <div className="education-card">
            <div className="card-header">
              <img
                src={polimiLogo}
                alt="Politecnico di Milano"
                className="university-logo"
              />
              <div className="degree-info">
                <h3 className="degree-title">
                  MSc in Computer Science Engineering
                </h3>
                <h4 className="specialization">High Performance Computing</h4>
                <div className="institution-status">
                  <span className="institution">Politecnico di Milano</span>
                  <span className="status ongoing">Ongoing</span>
                </div>
              </div>
            </div>

            <div className="description">
              Main focus on High Performance Computing, with a minor in Advanced
              Artificial Intelligence Topics.
            </div>

            <div className="subjects-section">
              <span className="subjects-title">Key subjects:</span>
              <div className="subjects-chips">
                {labelsMSc.map((label, i) => (
                  <Chip key={i} className="subject-chip" label={label} />
                ))}
              </div>
            </div>
          </div>

          {/* BSc */}
          <div className="education-card">
            <div className="card-header">
              <img
                src={unicaLogo}
                alt="University of Cagliari"
                className="university-logo"
              />
              <div className="degree-info">
                <h3 className="degree-title">
                  BSc in Applied Computer Science & Data Analytics
                </h3>
                <h4 className="specialization">Artificial Intelligence</h4>
                <div className="institution-status">
                  <span className="institution">University of Cagliari</span>
                  <span className="status graduated">110/110 with honours</span>
                </div>
              </div>
            </div>

            <div className="description">
              First graduate of the Bachelor's program, ranked in the top 5% of
              students.
            </div>

            <div className="subjects-section">
              <span className="subjects-title">Key subjects:</span>
              <div className="subjects-chips">
                {labelsBSc.map((label, i) => (
                  <Chip key={i} className="subject-chip" label={label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;

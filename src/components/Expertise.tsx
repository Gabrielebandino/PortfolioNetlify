import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faBrain } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsCloud = [
  "AWS Lambda",
  "API Gateway",
  "EventBridge",
  "S3",
  "DynamoDB",
  "Redshift",
  "CloudWatch",
  "CDK/Terraform",
  "Serverless Framework",
];

const labelsData = [
  "ETL/ELT",
  "Spark",
  "Redshift",
  "Parquet",
  "SQL",
  "Pandas",
  "Data Modeling",
  "Non Relational DBs",
  "Business Intelligence",
];

/** NEW: Machine Learning & Statistics */
const labelsML = [
  "Low-Latency ML",
  "PyTorch",
  "TensorFlow",
  "Feature Engineering",
  "Recommender Systems",
  "NLP",
  "Statistics",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1 className="section-title expertise">Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faAws} size="3x" aria-label="AWS" />
            <h3>Cloud & Serverless Architectures</h3>
            <p>
              I design scalable, event-driven systems on AWS using serverless
              and containerized workloads, with observability and IaC.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              <div className="chips-wrapper">
                {labelsCloud.map((label, i) => (
                  <Chip key={i} className="chip" label={label} />
                ))}
              </div>
              <div className="chips-divider"></div>
            </div>
          </div>

          {/* NEW: Data Engineering & Analytics */}
          <div className="skill">
            <FontAwesomeIcon
              icon={faDatabase}
              size="3x"
              aria-label="Database"
            />
            <h3>Data Engineering & Analytics (ETL/ELT)</h3>
            <p>
              I build reliable data pipelines and analytics layers for
              warehousing, BI, and ML—optimized for cost and performance.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              <div className="chips-wrapper">
                {labelsData.map((label, i) => (
                  <Chip key={i} className="chip" label={label} />
                ))}
              </div>
              <div className="chips-divider"></div>
            </div>
          </div>

          {/* NEW: Machine Learning & Statistics */}
          <div className="skill">
            <FontAwesomeIcon
              icon={faBrain}
              size="3x"
              aria-label="Machine Learning"
            />
            <h3>Machine Learning & Statistics</h3>
            <p>
              I turn data into models and insights—covering feature engineering,
              training, evaluation, and statistical validation.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              <div className="chips-wrapper">
                {labelsML.map((label, i) => (
                  <Chip key={i} className="chip" label={label} />
                ))}
              </div>
              <div className="chips-divider"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;

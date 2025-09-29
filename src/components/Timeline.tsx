import React, { useState, useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Chip from "@mui/material/Chip";
import "../assets/styles/Timeline.scss";

// Local logos
import amazonLogo from "../assets/images/amazon.png";
import unicaLogo from "../assets/images/unica.png";
import visioLogo from "../assets/images/visio.png";

type LogoIconProps = {
  src: string;
  alt: string;
};

function LogoIcon({ src, alt }: LogoIconProps) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%", // fill parent
        height: "100%",
        objectFit: "contain",
        borderRadius: "50%", // crop into a perfect circle
      }}
    />
  );
}

type CollapsibleDetailsProps = {
  children: React.ReactNode;
  summary: string;
};

function CollapsibleDetails({ children, summary }: CollapsibleDetailsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (isOpen && containerRef.current) {
      // When closing, scroll back to the timeline element that contains this dropdown
      const timelineElement = containerRef.current.closest(
        ".vertical-timeline-element"
      );
      if (timelineElement) {
        timelineElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
      // Small delay to let the scroll start before collapsing
      setTimeout(() => setIsOpen(false), 100);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`collapsible-container ${isOpen ? "expanded" : "collapsed"}`}
      onClick={handleToggle}
    >
      {!isOpen ? (
        // Collapsed state - show summary button
        <div className="summary-button">
          <span>{summary}</span>
          <svg
            className="chevron"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
        </div>
      ) : (
        // Expanded state - show content with close indicator
        <div className="expanded-content">
          {children}
          <div className="close-indicator">
            <span>Tap to close</span>
            <svg
              className="chevron rotated"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

// Transparent style so we don’t draw an extra circle background
const circleStyle: React.CSSProperties = {
  background: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1 className="section-title career">Career History</h1>
        <VerticalTimeline>
          {/* Amazon – Business Intelligence Engineer Intern */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "transparent", color: "white" }}
            contentArrowStyle={{
              borderRight: "7px solid rgba(255, 255, 255, 0.15)",
            }}
            date=""
            iconStyle={circleStyle}
            icon={<LogoIcon src={amazonLogo} alt="Amazon" />}
          >
            <div className="timeline-card">
              {/* Inline Title Format */}
              <div className="timeline-header">
                <h3 className="timeline-title">
                  Business Intelligence Engineer Intern
                </h3>
                <h4 className="timeline-company">@ Amazon</h4>
              </div>

              {/* Stack */}
              <div className="timeline-stack">
                <Chip className="chip" label="SQL" />
                <Chip className="chip" label="Python" />
                <Chip className="chip" label="TypeScript" />
                <Chip className="chip" label="AWS Lambda" />
                <Chip className="chip" label="Redshift" />
                <Chip className="chip" label="DynamoDB" />
              </div>

              {/* Date */}
              <p className="timeline-date">Mar 2025 – Aug 2025</p>

              {/* Desktop version - always visible */}
              <div className="desktop-details">
                <ul>
                  <li>
                    Built internal tool/service to instantly detect delays in
                    team-owned data pipelines, saving hours of on-call work each
                    day.
                  </li>
                  <li>
                    Ideated, implemented, and automated the retrieval of the
                    team's MBR metrics, central to management's discussions with
                    directors.
                  </li>
                  <li>
                    Owned Software Development and Data Engineering projects
                    within the team.
                  </li>
                  <li>
                    Partecipated in GenAI Hackathons, hosted by Principal
                    Applied Scientist teams.
                  </li>
                </ul>
              </div>

              {/* Mobile version - collapsible */}
              <div className="mobile-details">
                <CollapsibleDetails summary="Show more details">
                  <ul>
                    <li>
                      Built internal tool/service to instantly detect delays in
                      team-owned data pipelines, saving hours of on-call work
                      each day.
                    </li>
                    <li>
                      Ideated, implemented, and automated the retrieval of the
                      team's MBR metrics, central to management's discussions
                      with directors.
                    </li>
                    <li>
                      Owned Software Development and Data Engineering projects
                      within the team.
                    </li>
                    <li>
                      Partecipated in GenAI Hackathons, hosted by Principal
                      Applied Scientist teams.
                    </li>
                  </ul>
                </CollapsibleDetails>
              </div>
            </div>
          </VerticalTimelineElement>{" "}
          {/* University of Cagliari – Research Intern */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "transparent",
              color: "rgb(39, 40, 34)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid rgba(255, 255, 255, 0.15)",
            }}
            date=""
            iconStyle={circleStyle}
            icon={<LogoIcon src={unicaLogo} alt="University of Cagliari" />}
          >
            <div className="timeline-card">
              {/* Inline Title Format */}
              <div className="timeline-header">
                <h3 className="timeline-title">Research Intern</h3>
                <h4 className="timeline-company">@ University of Cagliari</h4>
              </div>

              {/* Stack */}
              <div className="timeline-stack">
                <Chip className="chip" label="R" />
                <Chip className="chip" label="Python" />
                <Chip className="chip" label="TensorFlow" />
              </div>

              {/* Date */}
              <p className="timeline-date">Mar 2024 – Jul 2024</p>

              {/* Desktop version - always visible */}
              <div className="desktop-details">
                <ul>
                  <li>
                    Researched the application of temporal autoencoders to
                    uncover patterns in financial statements that correlate with
                    long-term corporate prosperity.
                  </li>
                  <li>
                    Analyzed and forecasted corporate performance across a
                    dataset of 300,000 Italian companies.
                  </li>
                  <li>
                    Presented thesis work{" "}
                    <em>
                      "Latent Space Exploration for Financial Statement
                      Forecasting"
                    </em>
                    , showcasing methodologies and key findings.
                  </li>
                </ul>
              </div>

              {/* Mobile version - collapsible */}
              <div className="mobile-details">
                <CollapsibleDetails summary="Show more details">
                  <ul>
                    <li>
                      Researched the application of temporal autoencoders to
                      uncover patterns in financial statements that correlate
                      with long-term corporate prosperity.
                    </li>
                    <li>
                      Analyzed and forecasted corporate performance across a
                      dataset of 300,000 Italian companies.
                    </li>
                    <li>
                      Presented thesis work{" "}
                      <em>
                        "Latent Space Exploration for Financial Statement
                        Forecasting"
                      </em>
                      , showcasing methodologies and key findings.
                    </li>
                  </ul>
                </CollapsibleDetails>
              </div>
            </div>
          </VerticalTimelineElement>
          {/* Visioscientiae – Software Engineer Intern */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "transparent", color: "white" }}
            contentArrowStyle={{
              borderRight: "7px solid rgba(255, 255, 255, 0.15)",
            }}
            date=""
            iconStyle={circleStyle}
            icon={<LogoIcon src={visioLogo} alt="Visioscientiae" />}
          >
            <div className="timeline-card">
              {/* Inline Title Format */}
              <div className="timeline-header">
                <h3 className="timeline-title">Software Engineer Intern</h3>
                <h4 className="timeline-company">@ Visioscientiae</h4>
              </div>

              <div className="timeline-stack">
                <Chip className="chip" label="TypeScript" />
                <Chip className="chip" label="Python" />
                <Chip className="chip" label="Node" />
                <Chip className="chip" label="Express" />
                <Chip className="chip" label="FastAPI" />
                <Chip className="chip" label="MongoDB" />
                <Chip className="chip" label="Docker" />
                <Chip className="chip" label="LLMs" />
              </div>

              <p className="timeline-date">Nov 2023 – Mar 2024</p>

              {/* Desktop version - always visible */}
              <div className="desktop-details">
                <ul>
                  <li>
                    Developed a Dockerized web application to generate dynamic
                    product descriptions for large e-commerce platforms.
                  </li>
                  <li>
                    Delivered a scalable and efficient solution, presented
                    diverse LLM options based on customer satisfaction.
                  </li>
                </ul>
              </div>

              {/* Mobile version - collapsible */}
              <div className="mobile-details">
                <CollapsibleDetails summary="Show more details">
                  <ul>
                    <li>
                      Developed a Dockerized web application to generate dynamic
                      product descriptions for large e-commerce platforms.
                    </li>
                    <li>
                      Delivered a scalable and efficient solution, presented
                      diverse LLM options based on customer satisfaction.
                    </li>
                  </ul>
                </CollapsibleDetails>
              </div>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;

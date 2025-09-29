import React from "react";
import Chip from "@mui/material/Chip";
import drive from "../assets/images/drive.png";
import frogger from "../assets/images/frogger.png";
import nst from "../assets/images/nst.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1 className="section-title projects">Cool Projects</h1>
      <div className="projects-grid">
        {/* Project 1: Frogger */}
        <div className="project">
          <a
            href="https://github.com/Gabrielebandino/FroggerProcess"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={frogger}
              className="zoom"
              alt="Frogger thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/Gabrielebandino/FroggerProcess"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Frogger in C</h2>
          </a>
          <p>
            Developed a simplified Frogger clone in C, focusing on process and
            thread parallelization and scheduling. Implemented terminal-based
            graphics using the ncurses library.
          </p>
          <div className="flex-chips">
            <span className="chip-title">Tech stack:</span>
            <Chip className="chip" label="C" />
            <Chip className="chip" label="Parallelization" />
            <Chip className="chip" label="ncurses" />
          </div>
        </div>

        {/* Project 2: Autonomous Driving */}
        <div className="project">
          <a
            href="https://github.com/Gabrielebandino/AutonomousVehicles_RL"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={drive}
              className="zoom"
              alt="Autonomous Driving thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/Gabrielebandino/AutonomousVehicles_RL"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Autonomous Driving</h2>
          </a>
          <p>
            Built an autonomous driving simulation in Unity using a
            reinforcement learning approach, training agents to complete
            randomized tracks in the shortest possible time.
          </p>
          <div className="flex-chips">
            <span className="chip-title">Tech stack:</span>
            <Chip className="chip" label="C#" />
            <Chip className="chip" label="Python" />
            <Chip className="chip" label="PyTorch" />
            <Chip className="chip" label="Unity" />
          </div>
        </div>
        {/* Project 3: Neural Style Transfer */}
        <div className="project">
          <a
            href="https://github.com/Gabrielebandino/NeuralStyleTransfer"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={nst}
              className="zoom"
              alt="Neural Style Transfer thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/Gabrielebandino/NeuralStyleTransfer"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Neural Style Transfer</h2>
          </a>
          <p>
            Research and optimization on neural style transfer. Achieved sharper
            textures and more faithful color transfer than the TensorFlow
            baseline and Adobe’s Neural Filters (as of 2023).
          </p>
          <div className="flex-chips">
            <span className="chip-title">Tech stack:</span>
            <Chip className="chip" label="Python" />
            <Chip className="chip" label="TensorFlow" />
            <Chip className="chip" label="PyTorch" />
            <Chip className="chip" label="NST" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

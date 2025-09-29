import React from "react";
import "./App.css";

function App() {
  return (
    <div className="redirect-container">
      <div className="redirect-content">
        <h1 className="redirect-title">Please visit the new portfolio</h1>
        <a 
          href="https://gabrielebandino.github.io/portfolio/" 
          className="redirect-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          gabrielebandino.github.io/portfolio
        </a>
      </div>
    </div>
  );
}

export default App;

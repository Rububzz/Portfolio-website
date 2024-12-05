import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <div id="info" className="information">
      <div className="info-title">
        <h1>My Information</h1>
      </div>
      <div className="info-section">
        <div className="info">
          <a href="https://github.com/Rububzz" target="_blank">
            <button>Github</button>
          </a>
        </div>
        <div className="info">
          <a
            href="https://www.linkedin.com/in/lin-rubin-3a71322aa/"
            target="_blank"
          >
            <button>LinkedIn</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;

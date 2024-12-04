import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profilepic from "../../assets/rubinnn.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="aboutsection">
        <div className="aboutleft">
          <img src={profilepic} alt="" />
        </div>
        <div className="aboutright">
          <div className="about-para">
            <p>
              I am currently a student in NUS studying Computer Science.
              <br />
              My hobbies are playing basketball as well as dabbling in a bit of
              gaming <br />
              I have created Java applications for school projects
              <br />I have also done a research report about Depth estimation
              algorithms such as MiDas and Depth-Anything. <br /> I compared the
              2 algorithms in its efficiency and evaluted its feasible in using
              them to help the blind.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Java </p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>ReactJS</p> <hr style={{ width: "30%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "30%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import "./Header.css";
import profileimg from "../../assets/rubinnn.png";

const Header = () => {
  return (
    <div id="home" className="header">
      <img src={profileimg} alt="profileimg" className="profileimage" />
      <h1 className="Intro">
        Hi! I am <span>Lin Rubin</span>.
      </h1>
      <div className="header-action">
        <div className="my-resume">My resume</div>
      </div>
    </div>
  );
};

export default Header;

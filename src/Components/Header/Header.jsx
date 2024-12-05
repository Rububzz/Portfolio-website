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
        <a
          href="https://drive.google.com/file/d/1HizB15Hbm04Bk_7sd71MO8HK-n6wyw-X/view?usp=drive_link"
          target="_blank"
          className="my-resume"
        >
          My resume
        </a>
      </div>
    </div>
  );
};

export default Header;

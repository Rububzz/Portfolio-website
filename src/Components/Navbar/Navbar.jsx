import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav-menu">
        <li>Home</li>
        <li>About me</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;

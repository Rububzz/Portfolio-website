import React from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menuopen from "../../assets/menu_open.svg";
import menuclose from "../../assets/menu_close.svg";
import { useRef } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const menuref = useRef();

  const openMenu = () => {
    menuref.current.style.right = "0";
  };

  const closeMenu = () => {
    menuref.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={menuopen} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuref} className="nav-menu">
        <img
          src={menuclose}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#info">
            <p onClick={() => setMenu("info")}>My info</p>
          </AnchorLink>
          {menu === "info" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

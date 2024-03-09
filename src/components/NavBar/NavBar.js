import React from "react";
import "./NavBar.css";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";

const NavBar = () => {
  const [openNavBar, setOpenNavBar] = useState(false);
  const openNav = () => {
    console.log("clicked")
    setOpenNavBar(!openNavBar);
  };
  return (
    <nav>
      <div className="left">
        <h1>Portfolio</h1>
      </div>
      <div className="right">
        <FaBars size={"1.2rem"} className="navicon" onClick={openNav} />
        <ul className={openNavBar ? "active" : ""}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
import React from "react";
import { MainLogo, BriefcaseIcon, AccountIcon } from "../imagesAndIcons";
import { Link } from "react-router-dom";
import "../styling/header.css";

function Header() {
  return (
    <header>
      <div>
        <Link to="/home">
          <img src={MainLogo} alt="Hanki Logo" />
        </Link>
      </div>
      <div className="user-nav">
        <div className="business-btn">
          <img src={BriefcaseIcon} alt="Briefcase Icon" />
          <p>Start your business</p>
        </div>
        <button className="main-btn">
          <img src={AccountIcon} alt="Account icon" />
          <p>Account</p>
        </button>
      </div>
    </header>
  );
}

export default Header;

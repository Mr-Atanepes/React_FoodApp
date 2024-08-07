import React from "react";
import "../styling/copyRight.css";
import {
  FacebookIcon,
  XIcon,
  InstagramIcon,
  TikTokIcon,
} from "../imagesAndIcons";

function CopyRight() {
  return (
    <section className="copy-right">
      <div>
        <p className="copy-right-text">Hanki By TeachMeCode Institute 2024</p>
      </div>
      <div className="copy-right-icons">
        <img src={FacebookIcon} alt="Facebook Icon" className="copy-right-icon"/>
        <img src={XIcon} alt="X Icon"  className="copy-right-icon"/>
        <img src={InstagramIcon} alt="Instagram Icon"  className="copy-right-icon"/>
        <img src={TikTokIcon} alt="TikTok Icon"  className="copy-right-icon"/>
      </div>
    </section>
  );
}

export default CopyRight;

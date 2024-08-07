import React from "react";
import "../styling/appSection.css";
import { GoogleIcon, AppleIcon, DummyApp } from "../imagesAndIcons";

function AppSection() {
  return (
    <section className="app-section">
      <div>
        <div>
          <p className="app-download">Download Our Mobile App</p>
          <p className="app-text">And order food easily</p>
        </div>
        <div className="btn-app-container">
          <button className="btn-app btn-app-dark">
            <img src={AppleIcon} alt="Apple Icon" />
            <p>Apple Store</p>
          </button>
          <button className="btn-app">
            <img src={GoogleIcon} alt="Google Icon" />
            <p>Google Play</p>
          </button>
        </div>

        <p className="app-text">Or Login or Create an Account to start order</p>
      </div>

      <div className="image-container">
        <img src={DummyApp} alt="Mobile App Display" />
      </div>
    </section>
  );
}

export default AppSection;

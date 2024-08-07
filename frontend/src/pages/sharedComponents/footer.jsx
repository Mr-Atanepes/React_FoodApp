import React from "react";
import "../styling/footer.css";
import { GoogleIcon, AppleIcon, MainLogo } from "../imagesAndIcons";

function Footer() {
  return (
    <footer>
      <section>
        <img src={MainLogo} alt="Hanki Logo" />
        <p className="footer-text">
          Order Your Favorite Food From Restaurants and shops
        </p>
        <div class="btn-app-container">
          <button className="btn-app btn-app-dark">
            <img src={AppleIcon} alt="Apple Icon" />
            <p>Apple Store</p>
          </button>
          <button className="btn-app">
            <img src={GoogleIcon} alt="Google Icon" />
            <p>Google Play</p>
          </button>
        </div>
      </section>
      <section className="footer-list">
        <div className="list-head-footer">Foods</div>
        <div className="ul-list">
          <ul>
            <li>Food</li>
            <li>Pizza</li>
            <li>Chinese</li>
            <li>Vegan</li>
            <li>Sushi</li>
            <li>Indian</li>
          </ul>
          <ul>
            <li>Doner</li>
            <li>Burgers</li>
            <li>Ice Cream</li>
            <li>Asian</li>
            <li>Groceries</li>
            <li>Order more food</li>
          </ul>
        </div>
      </section>
      <section className="footer-list">
        <div className="list-head-footer">Quick Links</div>
        <div className="ul-list">
          <ul>
            <li>Customer Service</li>
            <li>Recommend a business</li>
            <li>List Your Business</li>
            <li>Become an affiliate</li>
            <li>Become a courier</li>
            <li>Jobs</li>
          </ul>
          <ul>
            <li>Points</li>
            <li>Terms of use</li>
            <li>Privacy Statement</li>
            <li>Colophon</li>
            <li>Cookie statement</li>
            <li>Newsroom</li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;

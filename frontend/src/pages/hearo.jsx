import React from "react";
import "./styling/hearo.css";

import { FoodOfferLady } from "./imagesAndIcons";

function Hearo() {
  return (
    <section className="hearo">
      <div>
        <span className="hearo-title">Are You Hungry?</span>
        <p className="hearo-text">
          Order Your Favorite Food From Restaurants and shops
        </p>
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Enter Address"
          />
          <button className="main-btn">Search</button>
        </div>
      </div>
      <div>
        {/*______________________FIXME:*/}
        <img src={FoodOfferLady} alt="Food Offer Lady" />
        {/*______________________FIXME:*/}
      </div>
    </section>
  );
}

export default Hearo;

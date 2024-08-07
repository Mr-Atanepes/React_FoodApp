import React from "react";

function FoodCard({ data, setShow, isLoading }) {
  return (
    <div class="card">
      <div class="food-card">
        <div class="img-container">
          <img class="food-img" src="" alt="sushi card" />
          <div
            className="btn"
            onClick={() => {
              isLoading ? () => {} : setShow(true);
            }}
          >
            +
          </div>
          {/* <img
            class="heart-icon"
            src="./images/heart-icon.svg"
            alt="heart icon"
          /> */}
        </div>

        <div class="text-container">
          <div class="restaurant-logo">
            <img src="" />
          </div>

          <div class="card-info">
            <div>
              <p class="card-info-head">{data.name}</p>
              <div class="review-text card-info-text">
                <img src="./images/fi-sr-star.svg" alt="star icon" />
                <span class="rating-text">4.8</span>
                <img src="./images/dot.svg" alt="dot icon" />
                <p>1024 + reviews</p>
              </div>
              <p>Sushi, Sea food</p>
            </div>
            <div class="delivery-text green-bg">Free Delivery</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;

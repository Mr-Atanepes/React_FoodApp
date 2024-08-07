import React from "react";
import "./styling/center.css";

import { FoodCombo, SalmonBreakfast } from "./imagesAndIcons";
function Center() {
  return (
    <section className="center">
      <section className="steps-info">
        <div>
          <img
            src={SalmonBreakfast}
            alt="Breakfast with salmon, cheese and greenery!"
          />
        </div>

        <section className="text-image">
          <div>
            <span className="steps-head">How It Works</span>
            <div>
              {/* <!-- Item div --> */}
              <div className="step-item">
                <div className="step-num">01</div>
                <div>
                  <p className="step-title">Enter Your Location</p>
                  <p className="step-doc">
                    We'll Show you stores and restaurants nearby you can order
                    from
                  </p>
                </div>
              </div>
              {/* <!-- Item div -->
              <!-- Item div --> */}
              <div className="step-item">
                <div className="step-num">02</div>
                <div>
                  <p className="step-title">Find What You Want</p>
                  <p className="step-doc">
                    Search for items or dishes, businesses or cuisines.
                  </p>
                </div>
              </div>
              {/* <!-- Item div -->
              <!-- Item div --> */}
              <div className="step-item">
                <div className="step-num">03</div>
                <div>
                  <p className="step-title">Order For Delivery</p>
                  <p className="step-doc">
                    We'll update you on your order's progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="side-image">
            {/*______________________FIXME:*/}
            <img src={FoodCombo} alt="food" />
            {/*______________________FIXME:*/}
          </div>
        </section>
      </section>
    </section>
  );
}

export default Center;

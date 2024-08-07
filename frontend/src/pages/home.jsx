import React, { useState, Profiler, Suspense } from "react";
import "./styling/home.css";
import Header from "./sharedComponents/header";
import Footer from "./sharedComponents/footer";
import CopyRight from "./sharedComponents/copyRight";
import AppSection from "./sharedComponents/appSection";
import useFoodList from "../hooks/foodList";
import HomeHeader from "./homeHeader";
import HomeFilter from "./HomeFilter";
import FoodCard from "./sharedComponents/FoodCard";
import { Modal, Button } from "react-bootstrap";
import Login from "./login";
const LazyFooter = React.lazy(() => import("./sharedComponents/footer"));

function Home() {
  const { data, isLoading } = useFoodList();
  const [show, setShow] = useState(false);


  // const { isLogin, isLoading } = useFoodList();
  console.log(data, isLoading);
  const [category, setCategory] = useState("All");
  const callOnRender = (id, phase, actualDuration, startTime) => {
    console.log(id, phase, actualDuration, startTime, "profile");
  };

  return (
    <>
      <Profiler id="home" onRender={callOnRender}>
        {/* {!isLoading && data.map((food) => <div>{food.name}</div>)} */}
        <HomeHeader setCategory={setCategory} />
        <div class="main-layout">
          <HomeFilter />
          <section>
            <p class="places-text">
              <span class="color-main">{data.length}</span> Places to Order
            </p>
            <div class="search-container">
              <img src="./images/fi-rr-search.svg" />
              <input type="text" />
            </div>
            {category + "this the category!!!"}
            <div class="cards-container">
              {/* <!-- food card --> */}
              {data.map((item) => {
                if (category == "All" || category == item.category) {
                  return (
                    <FoodCard
                      data={item}
                      isLoading={isLoading}
                      setShow={setShow}
                    />
                  );
                }
              })}
            </div>
          </section>
        </div>

        <Header />
        <AppSection />
        <Suspense fallback={() => <div>Loading the footer!!!</div>}>
          <LazyFooter />
        </Suspense>
        <CopyRight />
      </Profiler>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login setShow={setShow} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShow}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Home;

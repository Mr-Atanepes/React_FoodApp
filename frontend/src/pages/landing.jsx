import React from "react";
import "./styling/landing.css";

// import "./Landing.css";
import Header from "./sharedComponents/header";
import Hearo from "./hearo";
import Center from "./center";
import AppSection from "./sharedComponents/appSection";
import Footer from "./sharedComponents/footer";
import CopyRight from "./sharedComponents/copyRight";

function Landing() {
  return (
    <>
      <Header />
      <Hearo />
      <Center />
      <AppSection />
      <Footer />
      <CopyRight />
    </>
  );
}

export default Landing;

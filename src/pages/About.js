import React from "react";
import Header from "../components/Header";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <img className="about__banner" src="./image2.png" alt="" />
      <Collapse />
      <Footer />
    </div>
  );
};

export default About;

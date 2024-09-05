import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import AboutImg from "../media/88.jpg";
import Footer from "../components/footer/Footer";
import Atext from "../components/atext/Atext";
// imported new component "mainContainer.css" to help resolve page responsiveness issue
import '../components/mainContainer/mainContainer.css';

const About = () => {
    return (
      // added class mainContainer
      <div className="mainContainer">
        <Navbar />
        <Hero
          cName="hero-mid"
          heroImg={AboutImg}
          title="About"
          btnClass="hide"
        />



        <Atext />
        <Footer />
      </div>
    ); 
};

export default About;

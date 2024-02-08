import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import AboutImg from "../media/88.jpg";
import Footer from "../components/footer/Footer";
import Atext from "../components/atext/Atext";

const About = () => {
    return (
      <div>
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

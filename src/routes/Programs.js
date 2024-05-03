import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Programsimg from "../media/77.jpg";
import Footer from "../components/footer/Footer";
import Programsbox from "../components/programsbox/Programsbox";
import Activity from "../components/activity/Activity";
// imported new component "mainContainer.css" to help resolve page responsiveness issue
import '../components/mainContainer/mainContainer.css';
import Launch from "../components/launch/Launch";
import Second from "../components/second-activity/Second";


const Programs = () => {
  return (
    // added class mainContainer
    <div className="mainContainer">
      <Navbar />
      <Hero cName="hero-mid"
        heroImg={Programsimg}
        title="Programs" />

      {/* <Launch /> */}
      <Activity /> <br />
      <Second />
      <Programsbox  />
      <Footer />
    </div>
  );
}

export default Programs;

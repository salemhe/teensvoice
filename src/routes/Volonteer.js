import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import VolunteerImg from "../media/vol.jpg";
import Footer from "../components/footer/Footer";
import Participate from "../components/Participate/Participate";
// imported new component "mainContainer.css" to help resolve page responsiveness issue
import '../components/mainContainer/mainContainer.css';



const Volonteer = () => {
    return (
      // added class mainContainer
      <div className="mainContainer">
        <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={VolunteerImg} width="100%" height='100%'
                title="Volunteer"
                btnClass="hide"
            />

            <Participate />
            <Footer />
      </div>
    );
}

export default Volonteer;
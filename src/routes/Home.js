import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import HomeImg from "../media/crowd.jpg";
import AboutUs from "../components/aboutus/AboutUs";
import Footer from "../components/footer/Footer";
import Gallery from "../components/gallery/Gallery";
import Programsbox from "../components/programsbox/Programsbox";
import Destination from "../components/destination/Destination";
import ContactForm from "../components/contactform/ContactFrom";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Welcome to Teens Voice"
        text="let your voice be heared"
        buttonText="Join The Community"
        url="/contact"
        btnClass="show"
      />
      <Destination />
      <AboutUs />


        <Gallery />
        <Programsbox />
        <ContactForm />
        <Footer />
      </div>
    );
};

export default Home;

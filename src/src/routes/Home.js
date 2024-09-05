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
import Newstricker from "../components/newstricker/Newstricker";
import Popup from "../components/popup/Popup";
// imported new component "mainContainer.css" to help resolve page responsiveness issue
import '../components/mainContainer/mainContainer.css';



const Home = () => {
  return (
    // added class mainContainer
    <div className="mainContainer">
      <Navbar />
      {/* <Popup /> */}
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Welcome to Teens Voice"
        text="Let your voice be heard"
        buttonText="Join The Community"
        url="https://www.kingsforms.online/teensvoice-community"
        btnClass="show"
      />

      <Newstricker /> <br />
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

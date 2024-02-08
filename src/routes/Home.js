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


const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <Popup /> */}
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Welcome to Teens Voice"
        text="Let your voice be heared"
        buttonText="Join The Community"
        url="/signup"
        btnClass="show"
      />

      <Newstricker />
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

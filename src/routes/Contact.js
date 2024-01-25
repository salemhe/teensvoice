import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import ContactImg from "../media/100.jpg";
import Footer from "../components/footer/Footer";
import ContactForm from "../components/contactform/ContactFrom";



const Contact = () => {
    return (
      <div>
        <Navbar />
        <Hero
          cName="hero-mid"
          heroImg={ContactImg}
          title="Contact" />
        


        <ContactForm />
        <Footer />
      </div>
    );
};

export default Contact;

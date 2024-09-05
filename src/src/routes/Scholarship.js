import React from 'react';
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Scholar from "../media/scholar-background.jpg";
import Fee from "../components/fee/Fee";
import Footer from "../components/footer/Footer";


const Scholarship = () => {
  return (
      <div>
        <Navbar />

        <Hero
                cName="hero-mid"
                heroImg={Scholar} width="100%" height='100%'
                title="Scholarship"
                btnClass="hide"
            />

        <Fee />
        <Footer />

      </div>
  )
}

export default Scholarship;
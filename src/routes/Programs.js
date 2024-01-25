import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Programsimg from "../media/77.jpg";
import Footer from "../components/footer/Footer";
import Programsbox from "../components/programsbox/Programsbox";

const Programs = () => {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid"
        heroImg={Programsimg}
        title="Programs" />

      <Programsbox  />
      <Footer />
    </div>
  );
}

export default Programs;

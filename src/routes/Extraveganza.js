import React from 'react'
import Extrav from '../components/extrav/Extrav'

import Hero from "../components/hero/Hero";
import HomeImg from "../media/crowd.jpg";
// imported new component "mainContainer.css" to help resolve page responsiveness issue
import '../components/mainContainer/mainContainer.css';
import Navbar from "../components/navbar/Navbar";
import Footer from '../components/footer/Footer';
const Extraveganza = () => {
  return (
      <div className=' mainContainer'>
          <Navbar />
          <Hero
            cName="hero"
            heroImg={HomeImg}
            title="Are you ready to unravel, unleash and unfold your God given talents?"
            btnClass="hide"
          />
          <Extrav />
          <Footer/>
      </div>
  )
}

export default Extraveganza
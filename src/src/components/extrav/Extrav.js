import React from 'react'
import './Extrav.css'
import Prize from "../prize/Prize"
import Run from '../run/Run';
import Rules from '../rules/Rules';
import Unleash from '../unleash/Unleash';
import Acts from '../acts/Acts';
const Extrav = () => {
  return (
    <div className="container-extra">
      <Prize />
      <Run/>
      {/* Rules of engadment section */}
      <Rules/>
     
      {/* acts and instructions*/}
      <Acts/>
      
      {/* contact information */} <br />
      <Unleash/>
    </div>
  );
}

export default Extrav;
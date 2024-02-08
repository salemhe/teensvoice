import React from "react";
import './Hero.css';


const Hero = (props) => {
  return (
    <div>
      <div className={props.cName}>
        <img alt="HerpImg" src={props.heroImg} />

        <div className="hero__text">
          <h1>{props.title}</h1>
          <p>
            {" "}
            <b>{props.text}</b>
          </p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

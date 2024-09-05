import React from "react";
import './AboutUs.css';
import Page1 from "../../media/about-banner-4.jpg";
import Page2 from "../../media/about-banner-3.jpg";



const AboutUs = () => {
  return (
    <div className="aboutus">
      <h1>Teens Voice and You</h1>

      <div className="about__h">
        <div className="about__text">
          <h2>Teens Voice and You.</h2>
          <p>
            Our community helps young people explore{" "}
            <b>
              the power of their mind, see the value of their unique voice,
              fine-tune the quality of their message and how they choose to
              express it.
            </b>{" "}
            Going beyond lip service and taking pragmatic actions to reposition
            young minds as change agents in their immediate circle and the world
            at large through their unique ‘voices’ is the
            {""} <b>CORE </b> of our work.
          </p>

          <br />
          <a href="/about">read more</a>
        </div>

        <div className="about__img">
          <img alt="img" src={Page1} />
          <img alt="img" src={Page2} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

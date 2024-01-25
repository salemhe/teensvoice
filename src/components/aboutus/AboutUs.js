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
            Teens Voice is our response to the onslaught on the minds of young
            people from the media and the circular culture offering transient
            gratification in the short term but leaves them empty and frustrated
            in the long term.
          </p>{" "}
          <br />
          <p>
            Through Teens Voice, young people are educated on the importance of
            the power of their mind, the value of their unique voice, the
            quality of their message and how they choose to express it.
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

import React from "react";
import "./Destination.css";
import Page1 from "../../media/about-banner-1.jpg";
import Page2 from "../../media/about-banner-2.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <div className="destination__h">
        <div className="destination__img">
          <img alt="img" src={Page1} />
          <img alt="img" src={Page2} />
        </div>{" "}
        <br />
        <br />
        <div className="destination__text">
          <h2>To Give a Voice to All Teenagers and Youth</h2>
          <span className="mission">Our Mission</span> <br /> <br />
          <p>
            Teens Voice is a platform created to give expression to their
            'unique' voice and for the empowerment and transformation of young
            people. A safe haven where teenagers get to find their voice amidst
            all the noise in their environment, in better hopes of transforming
            their world through the investment of the right materials in their
            minds. <br /> <br />
          </p>{" "}
          <br />
          <ul className="destination__icons">
            <li>
              <i className="fa-solid fa-square-check"></i>
              <span>Traning Programs</span>
            </li>
            <li>
              <i className="fa-solid fa-square-check"></i>
              <span>Skill Development Programs</span>
            </li>
            <li>
              <i className="fa-solid fa-square-check"></i>
              <span>Resource Hub</span>
            </li>
            <li>
              <i className="fa-solid fa-square-check"></i>
              <span>Community Engagement</span>
            </li>{" "}
            <br />
            <a className="btn" href="/about">
              Read for more
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Destination;

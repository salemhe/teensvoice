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
          {/* added <br> to create spacing forour story and housed it in h3 tag */}
          <br></br>
          <h3>
            <span className="mission">Our Story</span>
          </h3>
          <br></br>
          {/* <p>
            Teens Voice was inspired by the Rhapsody of Realities TeeVo, a
            devotional for teenagers authored by the Founder of the Chris
            Oyakhilome Foundation. <br />
          </p>{" "} */}
          <br />
          <p>
            Since inception in June 2022 during the inaugural Teens Voice
            Conference at Oregun Ikeja, attended by students from 38 schools,
            teachers, officials from various educational districts, and
            representatives from the Lagos State Ministry of Education
            co-curricular department, our community has grown significantly to
            include over 20,000 young adults.
          </p>{" "}
          <br />
          <ul className="destination__icons">
            <li>
              <i className="fa-solid fa-square-check"></i>
              <span>Traning Programs</span>
            </li>
            <li>
              <i className="fa-solid fa-square-check"></i>
              <span>Skill Acquisition Programs</span>
            </li>
            <li>
              <i className="fa-solid fa-square-check"></i>
              <span>Talent Management</span>
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

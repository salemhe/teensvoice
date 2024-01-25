import React from "react";
import './Atext.css';
import Page3 from "../../media/comend.jpg";
import Page6 from "../../media/comend3.jpg";
import Page5 from "../../media/comend2.jpg";
import Page4 from "../../media/crowd.jpg";


const Atext = () => {
    return (
      <div className="aboutus">
        <div className="about__h">
          <div className="about__text">
            <h2>Teens Voice and You.</h2>
            <p>
              Teens Voice is our response to the onslaught on the minds of young
              people from the media and the circular culture offering transient
              gratification in the short term but leaves them empty and
              frustrated in the long term.
            </p>{" "}
            <br />
            <p>
              Teens Voice is a platform created to give expression to their
              'unique' voice and for the empowerment and transformation of young
              people. A safe haven where teenagers get to find their voice
              amidst all the noise in their environment, in better hopes of
              transforming their world through the investment of the right
              materials in their minds.
            </p>
            <br />
            <p>
              Through Teens Voice, young people are educated on the importance
              of the power of their mind, the value of their unique voice, the
              quality of their message and how they choose to express it.
            </p>
          </div>

          <div className="about__img">
            <img alt="img" src={Page3} />
            <img alt="img" src={Page6} />
          </div>
        </div>
        <div className="destination">
          <div className="destination__h">
            <div className="destination__text">
              <h2>The Acedemy</h2>
              <p>
                The Teens Voice Academy is a response to the urgent need to pay
                attention to the wholesome development of young people and
                provide them with requisite skills as well as information they
                require to be of positive impact to society and reposition them
                to serve as agents of change in their circle and the world at
                large.
              </p>
              <br />
              Through the academy young people are presented with opportunities
              to learn pertinent life-skills, leadership skills, entrepreneurial
              skills and lots more
            </div>

            <br />
            <div className="destination__text">
              {/* <h2>Teens Voice Hubs</h2> */}
              <h2>The Hub</h2>
              <p>
                We run our programs and activities in our hubs across the city
                of Lagos and through the Teens Voice Academy.
              </p>{" "}
              <br />
              <p>
                These are designated safe meeting spaces across the city of
                Lagos where we carry out our various activities, at these hubs
                members are trained on vocational skills, soft skills,
                leadership development that prepares them for life. Programs and
                activities at our Hubs are facilitated by subject matter experts
                and successful business professionals in different fields.
              </p>
              <br /> <br /> <br /> <br /> <br />
            </div>
          </div>
        </div>{" "}
        <br />
        <div className="destination__h">
          <div className="destination__img">
            <img alt="img" src={Page4} />
            <img alt="img" src={Page5} />
          </div>{" "}
          <br />
          <br />
          <div className="destination__text">
            {/* <h2>To Give a Voice to All Teenagers and Youth</h2> */}
            {/* <span className="mission">Our Mission</span> <br /> <br /> */}
            <p>
              The academy seeks to raise independent young people capable of
              taking initiative, birthing innovations and providing solutions to
              the current and future needs in Africa. The academy runs a variety
              of thematic programs aimed at empowering teenagers; these include:
            </p>{" "}
            <br />
            <ul className="destination__icons">
              <li>
                <i className="fa-solid fa-square-check"></i>
                <span>Not Too Young For Wealth [NTYFW]</span>
              </li>
              <li>
                <i className="fa-solid fa-square-check"></i>
                <span>Strictly For The Boys</span>
              </li>
              <li>
                <i className="fa-solid fa-square-check"></i>
                <span>Girls Connect</span>
              </li>
              <li>
                <i className="fa-solid fa-square-check"></i>
                <span>Teens Voice Creatives</span>
              </li>
              <li>
                <i className="fa-solid fa-square-check"></i>
                <span>Teens Voice Tech Hub </span>
              </li>
              <li>
                <i className="fa-solid fa-square-check"></i>
                <span>C.O.D.E</span>
              </li>{" "}
              <br />
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Atext;
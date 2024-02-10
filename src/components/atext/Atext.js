import React from "react";
import "./Atext.css";
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
            Teens Voice stands as our response to the bombardment of young minds
            by media and secular culture, which often promises fleeting
            satisfaction in the moment but ultimately leads to emptiness and
            disillusionment in the long run.
          </p>{" "}
          <br />
          <p>
            This is a community established to amplify their 'unique' voices and
            facilitate the empowerment and transformation of young individuals.
            It serves as a safe haven where teenagers can discover their voices
            amidst the noise of their environment, with the aim of positively
            influencing their world through the nurturing of their minds with
            the right resources.
          </p>
          <br />
        </div>

        <div className="about__img">
          <img alt="img" src={Page3} />
          <img alt="img" src={Page6} />
        </div>
      </div>
      <div className="destination-m">
        <div className="more__info">
          <div className="more__info-text">
            <h2>Our Mission</h2>
            <p>
              "Our mission is to empower young people to become self-reliant,
              proactive, and innovative leaders, equipped to address both
              present challenges and future demands across Africa."
            </p>
          </div>{" "}
          <br />
          <div className="more__info-text">
            <h2>Our Vision</h2>
            <p>
              "Our vision is to play a strategic role in the wholesome
              development of young people [Teens], offering them mentorship,
              support, and a platform necessary for fostering positive societal
              impact."
            </p>{" "}
            <br />
          </div>{" "}
          <br />
        </div> <br />
        <div className="destination__h-m">
          <div className="destination__text">
            <h2>The Hub</h2>
            <p>
              The Hub is our designated safe meeting space where members engage
              in various activities and programs. Here, they receive training in
              vocational skills, soft skills, and leadership development,
              preparing them for life. Mentors, subject matter experts, and
              successful professionals facilitate these activities.
            </p>{" "}
            <br /> <br />
          </div>

          <div className="destination__text">
            <h2>The Pillars</h2>
            <p>
              We are a people of{" "}
              <b>
                {" "}
                <u>FAITH</u>{" "}
              </b>
              our Programs and Initiatives are anchored on 4 major pillars
              D.I.C.E 🎲
            </p>{" "}
            <br />
            <p>
              {" "}
              <b>D</b>- Discipline{" "}
            </p>
            <p>
              {" "}
              <b>I</b>- Integrity{" "}
            </p>
            <p>
              <b>C</b> - Character
            </p>
            <p>
              {" "}
              <b>E</b>- Excellence
            </p>
            <br />
          </div>

          <br />
       
        </div>
      </div>{" "}
      <br />
      <div className="destination__h">
        <div className="destination__img">
          <img alt="img" src={Page4} />
          <img alt="img" src={Page5} />
        </div>{" "}
        <div className="destination__text">
          <p>
            We run a variety of thematic programs aimed at empowering
            teenagers; these include:
          </p>{" "}
          <br />
          <ul className="destination__icons">
            <li>
              <i className="fa-solid fa-square-check"></i>
              <span>Not Too Young For Wealth</span>
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
              <span>C.O.D.E </span>
            </li>{" "}
            <br />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Atext;

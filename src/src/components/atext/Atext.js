import React from "react";
import "./Atext.css";
import Page3 from "../../media/comend.jpg";
import Page6 from "../../media/teensvoiceaward.jpg";
import Page5 from "../../media/comend3.jpg";
import Page4 from "../../media/crowd.jpg";

const Atext = () => {
  return (
    <div className="aboutus">
      <div className="about__h">
        <div className="about__text">
          <h2>Teens Voice and You.</h2>
          <p>
          Teens Voice is an award-winning organization that helps protect young minds from harmful media and cultural influences. These influences often promise short-term happiness but ultimately lead to feelings of emptiness and disappointment.
          </p>{" "}
          <br />
          <p>
          This is where teens can find and express their unique voices. We provide safe spaces for self-discovery, empowerment, and growth. Our goal is to inspire young individuals to positively impact their world by equipping them with the right tools and resources.
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
              "Empower young people to become resourceful, proactive leaders of change, equipped to tackle present challenges and future demands across Africa."
            </p>
          </div>{" "}
          <br />
          <div className="more__info-text">
            <h2>Our Vision</h2>
            <p>
              "Nurturing Teens through mentorship and support, empowering them to drive positive societal change through their unique giftings and talents."
            </p>{" "}
            <br />
          </div>{" "}
          <br />
        </div> <br />
        <div className="destination__h-m">
          <div className="destination__text">
            <h2>The Hub</h2>
            <p>
              The Hub, fosters connection and growth through diverse activities and programs. Members acquire essential skills in: <br/>
                - Vocational training <br/>
                - Soft skills development <br/>
                - Leadership empowerment<br/> <br/>
                Expert mentors, industry specialists, and accomplished professionals lead these sessions, equipping members for lifelong success.
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

import React from "react";
import "./Programsbox.css";
import ProgramData from "./ProgramData";
import Pro1 from "../../media/gc.jpg";
import Pro2 from "../../media/100.jpg";
import Pro3 from "../../media/creative.jpg";
import Pro4 from "../../media/ntyfw.jpg";
import Pro5 from "../../media/35.jpg";
import Pro6 from "../../media/code.jpg";
import Pro7 from "../../media/creatives.jpg";


const Programsbox = () => {
    return (
      <div className="programbox">
        <h1>Our Programs</h1>
        <p>
          Through the academy young people are presented with opportunities to
          learn pertinent life-skills, leadership skills, entrepreneurial skills
          and lots more. The academy seeks to raise independent young people
          capable of taking initiative, birthing innovations and providing
          solutions to the current and future needs in Africa. The academy runs
          a variety of thematic programs aimed at empowering teenagers; these
          include:
        </p>

        <div className="programcard">
          <ProgramData
            image={Pro6}
            heading="Teens Voice C.O.D.E:"
            text="Teens Voice Class of Distinction and Excellence is an initiative focused on academic excellence in various subject areas and personal effectiveness. "
          />

          <ProgramData
            image={Pro1}
            heading="Girls Connect"
            text="Girls Connect is designed to reach and empower teenage girls, educating them on how to live purposefully and inspiring them to be all they were created for."
          />

          <ProgramData
            image={Pro3}
            heading="Teens Voice Tech Hub-"
            text="Our Tech hub teaches members of our academy about IOT, Coding, Robotics and introduces them to innovative thinking in our Hubs in a fun and insightful manner. "
          />

          <ProgramData
            image={Pro7}
            heading="Teens Voice Creatives"
            text="An initiative, specially designed for all kinds of teenage creatives and talents ranging from Public Speaking, Presenting, Dance, Singing, Drama and Movie Production, Graphics designs, Arts, Painting and Crafts. "
          />

          <ProgramData
            image={Pro4}
            heading="Not Too Young For Wealth"
            text="NTYFW empowers teens with real-world financial skills. Through in-class sessions, movies, and assignments led by successful entrepreneurs, we cover wealth creation and sustainability. Excursions and internships in various sectors enhance practical learning."
          />

          <ProgramData
            image={Pro5}
            heading="Strickly for The Boys"
            text="Strickly for The Boys guides male teens in transitioning responsibly from boys to men. Through our Men~tality programs and weekly sessions at Teens Voice Hub in Lagos, we empower them for strategic societal roles."
          />
        </div>
      </div>
    );
};


export default Programsbox;
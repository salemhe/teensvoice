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
          Teens Voice provides young individuals with opportunities to acquire
          essential life skills, leadership abilities, entrepreneurial acumen,
          and much more. Our goal is to cultivate self-reliant youth who can
          initiate change, innovate, and address the evolving challenges of
          Africa. Offering a range of thematic programs, which aims at
          empowering teenagers by equipping them with the necessary tools for
          success.
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
            text="NTYFW provides teens with practical financial education led by successful entrepreneurs. Through classes, movies, assignments, excursions, and internships, we cover wealth creation and sustainability."
          />

          <ProgramData
            image={Pro5}
            heading="Strictly for The Boys"
            text="'Strickly for The Boys' supports male teenagers in their journey towards responsible manhood. Our programs and weekly sessions at the Teens Voice Hub empower them for important societal roles with strategic guidance and mentorship."
          />
        </div>
      </div>
    );
};


export default Programsbox;
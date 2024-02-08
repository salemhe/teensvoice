import React from "react";
import './Activity.css';
import img1 from "../../media/firstlovepro.png";

const Activity = () => {
    return (
      <div className="activity__container">
        <div className="activity__image">
          <img src={img1} alt="Banner" />
        </div>
        <div className="activity__text">
          <h3>Upcoming Program ALERT !!</h3>
          <h4>MY FIRST LOVE 💕</h4>

          <p>
            “My First Love” is a movie premiere & concert aimed at deculturing
            the minds of young people from the stereotypes associated with the
            February 14th period and equipping them with the right information
            they require to make wise choices channeled towards living a
            purposeful life.{" "}
          </p> <br />

          <h4>Program Details</h4>
          <p>
            • Target Audience: Ages 14 & above <br />• Date: Tuesday 14th of
            February 2024. <br />• Time: 9:00am till 2pm
          </p> <br />

          <p>
            <i>
              REGISTRATION is Free but Mandatory:{" "}
              <a href="http://bit.ly/My-first-love"> REGISTER !!</a>
            </i>
          </p>
        </div>
      </div>
    );
}

export default Activity;
    
    
import React from 'react'
import "../activity/Activity.css";

const Second = () => {
  return (
    <div className="activity__container">
      <div className="activity__title">
        <div className="activity__video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9u_9Vs63XN4?si=FYMif09VdfPDJ7Gq"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="activity__text">
        <h3>Rewatch the LIVE Broaadcast !!</h3>
        <h4>MY FIRST LOVE 💕</h4>
        <p>
          “My First Love” is a movie premiere & concert aimed at deculturing the
          minds of young people from the stereotypes associated with the
          February 14th period and equipping them with the right information
          they require to make wise choices channeled towards living a
          purposeful life.{" "}
        </p>{" "}
        <br />
        
        <p>
          <i>
            Click this link to subscribe to our YouTube Channel:{" "}
            <a href="https://www.youtube.com/@teensvoiceacademy8089">
              {" "}
              Subscribe
            </a>
          </i>
        </p>
      </div>
    </div>
  );
};

export default Second
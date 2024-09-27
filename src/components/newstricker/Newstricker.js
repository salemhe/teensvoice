import React from "react";
import "./Newstricker.css";


const Newstricker = () => {
    return (
      <div className="news-ticker-container">
        <div className="news-ticker">
        <p>
            UPCOMING PROGRAM ALERT{" "}
            <a
              href="https://lagos-city-high-school-festival.vercel.app/"
              // href="https://www.kingsforms.online/teensvoice-community"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here To Join Our Community
            </a>
          </p>
        </div>
      </div>
    );
}

export default Newstricker;
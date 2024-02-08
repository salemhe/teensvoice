import React from "react";
import "./Newstricker.css";


const Newstricker = () => {
    return (
      <div className="news-ticker-container">
        <div className="news-ticker">
          <p>
            UPCOMING PROGRAM !! "My First Love" happening on 14th February 2024! 💕{" "}
            <a
              href="http://bit.ly/My-first-love"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to register
            </a>
          </p>
        </div>
      </div>
    );
}

export default Newstricker;
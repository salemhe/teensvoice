import React from "react";
import "./Launch.css";
import video from "../../media/video.mp4";

const Launch = () => {
    return (
      <div className="vid__container">
        <video width="100%" height="100%" controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
}

export default Launch;
import React, { useRef, useEffect } from "react";
import "./Launch.css";
import video from "../../media/video.mp4";

const Launch = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVideoEnded = () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("ended", handleVideoEnded);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("ended", handleVideoEnded);
      }
    };
  }, []);

  return (
    <div className="vid__container">
      <video ref={videoRef} width="100%" height="100%" controls autoPlay>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Launch;

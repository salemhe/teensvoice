import React from "react";
import "./Programsbox.css";

const ProgramData = (props) => {
  return (
    <div className="p__card">
      <div className="p__image">
        <img src={props.image} alt="p_image" />
      </div>

      <h4>{props.heading}</h4>
      <p>{props.text}</p>

      <p></p>
    </div>
  );
};

export default ProgramData;

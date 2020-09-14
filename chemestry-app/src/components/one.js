import React from "react";
import Slider from "../components/slider";

const one = (props) => {
  return (
    <div className="one">
      <div className="container">
        <h2>{props.name}</h2>
        <div className="hey">
          <Slider name={props.name} />
        </div>
        <input type="text" />
      </div>
    </div>
  );
};

export default one;

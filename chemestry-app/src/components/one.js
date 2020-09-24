import React from "react";
import Slider from "../components/slider";
import TextField from "../components/textField"

const one = (props) => {
  return (
    <div className="one">
      <div className="container">
        <h2>{props.name}</h2>
        <div className="hey">
          <Slider name={props.name} />
        </div>
        <TextField name={props.name}/>
      </div>
    </div>
  );
};

export default one;

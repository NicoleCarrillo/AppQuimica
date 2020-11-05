import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import obj from "../clases/metodos";
import PropTypes from "prop-types";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";

var variable,constante;
var valor=21;

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    height: 500,
    borderRadius: 20,
  },
});

function valuetext(value) {
  if(value!=valor){
    console.log(obj.orquestador(0,"","",variable,constante,value));
    valor=value;
  }
  return `${value}°C`;
}

const marks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 10,
    label: "10°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 30,
    label: "30°C",
  },
  {
    value: 40,
    label: "40°C",
  },
  {
    value: 50,
    label: "50°C",
  },
  {
    value: 60,
    label: "60°C",
  },
  {
    value: 70,
    label: "70°C",
  },
  {
    value: 80,
    label: "80°C",
  },
  {
    value: 90,
    label: "90°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

const marksP = [
  {
    value: 0,
    label: "0 mmHg",
  },
  {
    value: 10,
    label: "10 mmHg",
  },
  {
    value: 20,
    label: "20 mmHg",
  },
  {
    value: 30,
    label: "30 mmHg",
  },
  {
    value: 40,
    label: "40 mmHg",
  },
  {
    value: 50,
    label: "50 mmHg",
  },
  {
    value: 60,
    label: "60 mmHg",
  },
  {
    value: 70,
    label: "70 mmHg",
  },
  {
    value: 80,
    label: "80 mmHg",
  },
  {
    value: 90,
    label: "90 mmHg",
  },
  {
    value: 100,
    label: "1000 mmHg",
  },
];

export default function VerticalSlider(props) {
  const classes = useStyles();
  constante=props.name;
  if(constante==="Temperatura"){
    variable="Presion";
  }else{
    variable="Temperatura";
  }
  return (
    <React.Fragment>
      <div className={classes.root}>
        {props.name === "Temperatura" ? (
          <Slider
            valueLabelDisplay="auto"
            orientation="vertical"
            getAriaValueText={valuetext}
            valueLabelDisplay="on"
            defaultValue={20}
            aria-labelledby="vertical-slider"
            marks={marks}
          />
        ) : null}
        {props.name === "Presión" ? (
          <Slider
            valueLabelDisplay="auto"
            orientation="vertical"
            getAriaValueText={valuetext}
            valueLabelDisplay="on"
            defaultValue={20}
            aria-labelledby="vertical-slider"
            marks={marksP}
          />
        ) : null}
      </div>
    </React.Fragment>
  );
}

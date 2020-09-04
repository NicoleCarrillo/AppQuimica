import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';

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
  return `${value}°C`;
}

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 10,
    label: '10°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 30,
    label: '30°C',
  },
  {
    value: 40,
    label: '40°C',
  },
  {
    value: 50,
    label: '50°C',
  },
  {
    value: 60,
    label: '60°C',
  },
  {
    value: 70,
    label: '70°C',
  },
  {
    value: 80,
    label: '80°C',
  },
  {
    value: 90,
    label: '90°C',
  },
  {
    value: 100,
    label: '100°C',
  },  
];

export default function VerticalSlider() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Slider
          valueLabelDisplay="auto"
          orientation="vertical"
          getAriaValueText={valuetext}
          valueLabelDisplay="on"
          defaultValue={20}
          aria-labelledby="vertical-slider"
          marks={marks}
        />
      </div>
    </React.Fragment>
  );


}





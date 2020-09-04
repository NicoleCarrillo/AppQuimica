import React from "react";
import "../App.css";

class Button extends React.Component {
  render() {
    return <button className="btn btn-outline">{this.props.name}</button>;
  }
}

export default Button;

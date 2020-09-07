import React, { Component } from "react";
import Example from "./components/chartEx";
import { FaTemperatureLow } from "react-icons/fa";
import { FaCloudscale } from "react-icons/fa";
import Button from "./components/button";
import Slider from "./components/slider";
import Dark from "./components/darkButton";
import Component1 from "./components/dropDown1";
import Component2 from "./components/dropDown2";
import "./App.css";
import { Hidden } from "@material-ui/core";

class App extends Component {
  state = {
    name: "Temperatura",
    show: true,
  };

  hide = () => {
    this.setState({
      show: false,
    });
  };

  show = () => {
    this.setState({
      show: true,
    });
  };

  barChangeHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="dark">
          <Dark />
        </div>
        <header className="App-header">
          <FaTemperatureLow color="#a56cc1" />
          <Button name="Temperatura" onClick={this.barChangeHandler} />
          <Button name="Presión" onClick={this.barChangeHandler} />
          <FaCloudscale color="#a56cc1" />
        </header>
        <div className="wrapper">
          <div className="one">
            <div className="container">
              <h2>{this.state.name}</h2>
              <div className="hey">
                <Slider />
              </div>
              <input type="text" />
            </div>
          </div>
          <div className="line-chart">
            <Example />
            <div className="cnic">
              <div className="seven">
                <Component1 />
              </div>
              <div className="eight">
                <Component2 />
              </div>
            </div>
          </div>
          <div className="three">
            <h2>Tipo de solución</h2>
            <hr />
            <form action="" className="formulario-soluciones">
              <div className="radio">
                <div className="radio-group">
                  <input
                    type="radio"
                    name="Solucion"
                    value="Solucion Real"
                    onClick={() => this.show()}
                  />
                  <label htmlFor="Solucion Real">Solución Real</label>
                </div>
                <div className="radio-group">
                  <input
                    type="radio"
                    name="Solucion"
                    value="Solucion Ideal"
                    onClick={() => this.hide()}
                  />
                  <label htmlFor="Solucion Ideal">Solución Ideal</label>
                </div>
              </div>
            </form>
          </div>
          {this.state.show ? (
            <div className="four">
              <h2>Método</h2>
              <hr />
              <form action="" className="formulario-metodos">
                <div className="radio">
                  <div className="radio-group">
                    <input type="radio" name="Solucion Real" value="Margules" />
                    <label htmlFor="Solucion Real">Margules</label>
                  </div>
                  <div className="radio-group">
                    <input type="radio" name="Solucion Real" value="Wilson" />
                    <label htmlFor="Solucion Ideal">Wilson</label>
                  </div>
                  <div className="radio-group">
                    <input type="radio" name="Solucion Real" value="van Laar" />
                    <label htmlFor="Solucion Ideal">van Laar</label>
                  </div>
                </div>
              </form>
            </div>
          ) : null}

          <div className="six">
            <h2>Fracciones molares</h2>
            <hr />
            <div className="wrap-fracciones">
              <div>
                <Button name="Fase líquida" />
              </div>
              <div>
                <Button name="Fase gaseosa" />
              </div>
              <div>
                <Button name="Temperatura/Presión" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

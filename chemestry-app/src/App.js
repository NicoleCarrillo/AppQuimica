import React, { Component } from "react";
import Dark from "./components/darkButton";
import Header from "./components/header";
import One from "./components/one";
import Middle from "./components/middle";
import Three from "./components/three";
import Four from "./components/four";
import Six from "./components/six";
import Nine from "./components/nine";
import obj from "./clases/metodos";
import "./App.css";

class App extends Component {
  state = {
    name: "Temperatura/Presión",
    show: false,
  };

  hide = () => {
    obj.orquestador(0);
    this.setState({
      show: false,
    });
  };

  show = () => {
    obj.orquestador(0);
    this.setState({
      show: true,
    });
  };

  clickIdeal = () => {
    obj.orquestador(0);
  };

  barChangeHandler = (event) => {
    if (event.target.value === "Temperatura") {
      this.setState({
        name: "Presión",
      });
    } else {
      this.setState({
        name: "Temperatura",
      });
    }
  };

  render() {
    console.log(obj.orquestador(0));
    return (
      <div className="App">
        <div className="dark">
          <Dark />
        </div>
        <Header onClick={this.barChangeHandler} />
        <div className="wrapper">
          <One name={this.state.name} />
          <Middle />
          <Three
            onClickShow={() => this.show()}
            onClickHide={() => this.hide()}
            //onClickIdeal={() => this.clickIdeal()}
          />
          {this.state.show ? <Four /> : null}
          <Six name={this.state.name} />
          <Nine />
        </div>
      </div>
    );
  }
}

export default App;

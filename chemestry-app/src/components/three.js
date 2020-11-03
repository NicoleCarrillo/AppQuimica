import React from "react";
import obj from "../clases/metodos";

function invocador(){
  obj.orquestador(0);
}

const three = (props) => {
  return (
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
              onClick={props.onClickShow}
             // onClick={props.onClickIdeal}
            />
            <label htmlFor="Solucion Real">Solución Real</label>
          </div>
          <div className="radio-group">
            <input
              type="radio"
              name="Solucion"
              value="Solucion Ideal"
              onClick={props.onClickHide}
              //onClick={props.onClickIdeal}
            />
            <label htmlFor="Solucion Ideal">Solución Ideal</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default three;

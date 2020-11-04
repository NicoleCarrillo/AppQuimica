import React from "react";

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
            />
            <label htmlFor="Solucion Real">Solución Real</label>
          </div>
          <div className="radio-group">
            <input
              type="radio"
              name="Solucion"
              value="Solucion Ideal"
              onClick={props.onClickHide}
            />
            <label htmlFor="Solucion Ideal">Solución Ideal</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default three;

import React from "react";
import ModalFL from "../components/modalFL";
import ModalFG from "../components/modalFG";
import ModalTP from "../components/modalTP";

const six = (props) => {
  return (
    <div className="six">
      <h2>Fracciones molares</h2>
      <hr />
      <div className="wrap-fracciones">
        <div>
          <ModalFL name="Fase Líquida" />
        </div>
        <div>
          <ModalFG name="Fase gaseosa" />
        </div>
        <div>
          <ModalTP name={props.name} />
        </div>
      </div>
    </div>
  );
};

export default six;

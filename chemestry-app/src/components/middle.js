import React from "react";
import Chart from "../components/chartEx";
import Component1 from "../components/dropDown1";
import Component2 from "../components/dropDown2";

const middle = () => {
  return (
    <div className="line-chart">
      <Chart />
      <div className="cnic">
        <div className="seven">
          <Component1 />
        </div>
        <div className="eight">
          <Component2 />
        </div>
      </div>
    </div>
  );
};

export default middle;

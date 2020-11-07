import React from "react";
import Chart from "../components/chart";

import Component1 from "../components/dropDown1";

const middle = () => {
  return (
    <div className="line-chart">
      <Chart />
      <div className="cnic">
        <div className="seven">
          <Component1 />
        </div>
      </div>
    </div>
  );
};

export default middle;

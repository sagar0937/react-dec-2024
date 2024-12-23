import React, { useState } from "react";
import withHOC from "../../hoc/withHoc";

const ClickCounter = ({ count, handleIncrement, buttonName }) => {
  return (
    <div>
      {count}
      <button onClick={handleIncrement}>{buttonName}</button>
    </div>
  );
};

export default withHOC(ClickCounter, 5);

import React, { useState } from "react";
import withHOC from "../../hoc/withHoc";

const Mouseovercount = ({ count, handleIncrement, buttonName }) => {
  return (
    <div>
      {count}
      <button onMouseOver={handleIncrement}>{buttonName}</button>
    </div>
  );
};

export default withHOC(Mouseovercount, 10);

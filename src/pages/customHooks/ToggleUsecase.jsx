import React, { useState } from "react";

const ToggleUsecase = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div>
      ToggleUsecase
      <button onClick={handleToggle}>{toggle ? "hide" : "show"}</button>
      {toggle && <p>text hello</p>}
    </div>
  );
};

export default ToggleUsecase;

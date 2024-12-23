import React, { memo } from "react";

const Memouse = ({ handleCount2, count2 }) => {
  console.log("memo child redenred");
  return (
    <div>
      Memouse
      <button onClick={handleCount2}>increment-2</button>
      <p>{count2}</p>
    </div>
  );
};

export default memo(Memouse);

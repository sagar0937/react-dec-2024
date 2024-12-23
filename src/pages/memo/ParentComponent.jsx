import React, { useCallback, useMemo, useState } from "react";
import Memouse from "./MemoCallback";

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleCount2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]); //will rendered child only when count2 changes----will not rendered when count1 chnges

  return (
    <div>
      ParentComponent
      <button onClick={handleCount}>increment-1</button>
      <p>{count}</p>
      <Memouse handleCount2={handleCount2} count2={count2} />
    </div>
  );
};

export default ParentComponent;

import React, { useEffect, useRef, useState } from "react";
import usePrevious from "../../hooks/usePrevious";

const Previoususecase = () => {
  const [count, setCount] = useState(0);
  // const prevCount = usePrevious(count);
  const ref = useRef();

  useEffect(() => {
    ref.current = count;
  }, [count]);
  console.log(ref.current);
  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {ref.current}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default Previoususecase;

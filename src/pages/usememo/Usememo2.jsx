import React, { useState, useMemo } from "react";

const Child = React.memo(({ items }) => {
  console.log("Child component rendered!");
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
});

const UseMemo2 = () => {
  const [count, setCount] = useState(0);

  const memoizedItems = useMemo(() => ["one", "two", "three"], []);

  return (
    <div>
      <h1>Parent UseMemo2 Component</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <p>Count: {count}</p>

      <Child items={memoizedItems} />
    </div>
  );
};

export default UseMemo2;

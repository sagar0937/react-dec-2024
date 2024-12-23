import React, { useState, useMemo } from "react";

const ExpensiveCalculation = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveValue = useMemo(() => {
    console.log("Expensive calculation running...");
    return count ** 2; // Simulate expensive calculation
  }, [count]);

  return (
    <div>
      <h1>Expensive Calculation</h1>
      <p>Count: {count}</p>
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
};

export default ExpensiveCalculation;

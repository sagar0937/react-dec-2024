import { useState, useEffect } from "react";

const DebouncedInput = () => {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, 1000);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};
export default DebouncedInput;

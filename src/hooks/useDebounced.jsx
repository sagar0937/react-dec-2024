import React, { useEffect, useState } from "react";

const useDebounced = (value, delay) => {
  const [debounceVal, setDebounced] = useState(value);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [value, delay]);

  return { debounceVal };
};

export default useDebounced;

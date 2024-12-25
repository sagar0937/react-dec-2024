import React from "react";

const PracticeJs = () => {
  const debounce = (fn, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  };
  const logfn = () => {
    console.log("debounced function called");
  };
  const debouncedfn = debounce(logfn, 3000);

  return (
    <div>
      PracticeJs
      <button onClick={debouncedfn}>click me</button>
    </div>
  );
};

export default PracticeJs;

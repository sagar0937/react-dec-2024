import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  // State variables
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Ref to hold the interval id
  const intervalRef = useRef(null);

  // Start or stop the timer
  const toggleTimer = () => {
    if (isRunning) {
      // If the timer is running, stop it
      clearInterval(intervalRef.current);
    } else {
      // If the timer is not running, start it
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  // Reset the timer
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  // Cleanup interval on component unmount
  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <h1>Timer: {time}s</h1>
      <button onClick={toggleTimer}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;

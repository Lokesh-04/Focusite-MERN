import React, { useState, useEffect } from "react";

function PomodoroTimer() {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const interval = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isPaused, secondsLeft]);

  function handleStart() {
    setIsPaused(true);
  }

  function handlePause() {
    setIsPaused(false);
  }

  function handleReset() {
    setSecondsLeft(25 * 60);
    setIsPaused(false);
  }

  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <p>
        {secondsLeft} seconds left
      </p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default PomodoroTimer;
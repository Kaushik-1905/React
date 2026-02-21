import React, { useEffect, useState } from "react";

function TimerCounter() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div>
      <h2>Timer Counter</h2>
      <p>Count: {count}</p>

      {!running ? (
        <button onClick={() => setRunning(true)}>Start</button>
      ) : (
        <button onClick={() => setRunning(false)}>Stop</button>
      )}

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default TimerCounter;

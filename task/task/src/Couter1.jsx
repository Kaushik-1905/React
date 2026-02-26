import React, { useState } from "react";

const Counter = ({ onButtonClick }) => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1); // user input value

  const increment = () => {
    const newCount = count + Number(step);
    setCount(newCount);
    onButtonClick && onButtonClick(newCount);
  };

  const decrement = () => {
    const newCount = count - Number(step);
    setCount(newCount);
    onButtonClick && onButtonClick(newCount);
  };

  return (
    <div>
      <h2>Count: {count}</h2>

      <input
        type="number"
        value={step}
        onChange={(e) => setStep(e.target.value)}
        placeholder="Enter number"
      />

      <br /><br />

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
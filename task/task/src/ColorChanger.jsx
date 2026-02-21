import React, { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("black");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div>
      <h2 style={{ color: color }}>
        Click a button to change my color!
      </h2>

      <button onClick={() => changeColor("red")}>
        Red
      </button>

      <button onClick={() => changeColor("blue")}>
        Blue
      </button>

      <button onClick={() => changeColor("green")}>
        Green
      </button>
    </div>
  );
}

export default ColorChanger;

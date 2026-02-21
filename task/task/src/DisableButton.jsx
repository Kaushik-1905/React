import React, { useState } from "react";

function DisableButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <button onClick={handleClick} disabled={clicked}>
        {clicked ? "Clicked" : "Click Me"}
      </button>

      {clicked && <p>Button Clicked</p>}
    </div>
  );
}

export default DisableButton;

// import React, { useState } from "react";
// import Child from "./task-3/Child";
// import { ThemeContext } from "./task-3/ThemeContext";

// const App = () => {
//   const [theme, setTheme] = useState("light");

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//   <Routes>
//     <Route path="/" element={<Child />} />
//   </Routes>
// </ThemeContext.Provider>


//   );
// };

// export default App;


import React from "react";
import Counter from "./Couter1";

const App = () => {
  const handleClick = (count) => {
    console.log("Current Count:", count);
  };

  return (
    <div>
      <Counter onButtonClick={handleClick} />
    </div>
  );
};

export default App;

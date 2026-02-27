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



import Counter from './Counter'

function App() {
  return <Counter />
}

export default App

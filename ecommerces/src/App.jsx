import { useState } from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import HeroSlider from "./components/Main/HeroSlider";
import About from "./components/Main/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Nav />
      <HeroSlider />
      <About/>
    </div>
  );
}

export default App;
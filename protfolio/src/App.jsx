import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protfolio from "./Protfolio";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>

      {/* HEADER ON ALL PAGES */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Protfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
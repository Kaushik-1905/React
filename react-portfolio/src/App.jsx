import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Loader from "./Pages/Loder";
import Navbar from "./Pages/Navbar";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Portfolio from "./Pages/Protfolio";
import Blog from "./Pages/Blog";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" setLoading={setLoading} />
      ) : (
        <div key="main">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
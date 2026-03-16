import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Portfolio from "./Pages/Protfolio";
import Blog from "./Pages/Blog";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Blog />
    </>
  );
}

function App() {
  return (
      <AnimatePresence mode="wait">
        <div key="main">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </AnimatePresence>
  );
}

export default App;
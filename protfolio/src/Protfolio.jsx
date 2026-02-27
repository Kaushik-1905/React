import React from "react";
import "./assets/Protfolio.css";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

import project01 from "./assets/project01.png";
import project02 from "./assets/project02.png";
import project03 from "./assets/project03.png";


export default function App() {
  return (
    <div className="app">
      <BackgroundGlow />
      <Navbar />
      <Hero />  
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

function BackgroundGlow() {
  return (
    <div className="bg-glow">
      <div className="glow glow-1" />
      <div className="glow glow-2" />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">KAUSHIK</h1>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Engineering Intelligent <br />
        <span className="gradient-text">Digital Systems</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        I craft premium, high-end websites with elegant design systems and
        smooth interactions.
      </motion.p>

      <motion.a
        href="#work"
        className="primary-btn"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        View Portfolio <ArrowUpRight size={18} />
      </motion.a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="about-grid">
        <div>
          <h3>About Me</h3>
          <p>
            I specialize in building visually striking and performance-driven
            web experiences. My focus blends minimalism with bold luxury
            aesthetics.
          </p>
        </div>
        <div className="about-card">
            <img src="/src/assets/photo.jpg" alt="Profile" />
        </div>
      </div>
    </section>
  );
}


function Work() {
  const projects = [
    { id: "01", image: project01, title: "Luxury Brand Site" },
    { id: "02", image: project02, title: "Premium Portfolio" },
    { id: "03", image: project03, title: "E-commerce Experience" },
  ];

  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (newDirection) => {
    setIndex([
      (index + newDirection + projects.length) % projects.length,
      newDirection,
    ]);
  };

  return (
    <section id="work" className="section">
      <h3 className="center">Selected Work</h3>

      <div className="slider-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="slide"
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              backgroundImage: `url(${projects[index].image})`,
            }}
          >
            <div className="work-overlay">
              <h4>{projects[index].title}</h4>
              <p>Premium Web Experience</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button className="nav-btn left" onClick={() => paginate(-1)}>
          <ArrowLeft size={20} />
        </button>

        <button className="nav-btn right" onClick={() => paginate(1)}>
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section center">
      <h3>Let’s Build Something Iconic</h3>
      <p>
        Ready to elevate your brand with a refined digital presence? Let’s
        create something extraordinary together.
      </p>
      <a href="mailto:kaushikdagaya1902@example.com" className="gold-btn">
        <Mail size={18} /> Contact Me
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Kaushik. Crafted with precision.
    </footer>
  );
}




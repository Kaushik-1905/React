import React from "react";
import "./assets/Protfolio.css";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import "./assets/Protfolio.css";


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
        Designing Digital <br />
        <span className="gradient-text">Luxury Experiences</span>
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
            <img src="/your-photo.jpg" alt="Profile" />
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="section">
      <h3 className="center">Selected Work</h3>
      <div className="work-grid">
        {["01", "02", "03"].map((item) => (
          <div key={item} className="work-card">
            <div className="work-overlay">
              <h4>Project {item}</h4>
              <p>Premium Web Experience</p>
            </div>
          </div>
        ))}
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
      <a href="mailto:youremail@example.com" className="gold-btn">
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




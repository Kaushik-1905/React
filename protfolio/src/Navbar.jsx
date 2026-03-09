import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <style>{`
        .navbar{
          position: sticky;
          top: 0;
          z-index: 1000;

          display: flex;
          justify-content: space-between;
          align-items: center;

          padding: 18px 40px;

          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(10px);

          border-bottom: 1px solid #111;
        }

        .logo{
          font-size: 20px;
          font-weight: 600;
          letter-spacing: 2px;
        }

        .nav-links{
          display: flex;
          gap: 30px;
        }

        .nav-links a{
          color: #ddd;
          text-decoration: none;
          font-size: 15px;
          transition: 0.3s;
        }

        .nav-links a:hover{
          color: gold;
        }
      `}</style>

      <nav className="navbar">
        <h1 className="logo">KAUSHIK</h1>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <a href="/#work">Work</a>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
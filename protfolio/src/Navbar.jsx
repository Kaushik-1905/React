import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path;

  return (
    <>
      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 40px;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #111;
        }

        .logo {
          font-size: 20px;
          font-weight: 600;
          letter-spacing: 2px;
        }

        .nav-links {
          display: flex;
          gap: 30px;
          align-items: center;
        }

        .nav-links a {
          color: #ddd;
          text-decoration: none;
          font-size: 15px;
          transition: color 0.3s;
          position: relative;
          padding-bottom: 4px;
        }

        /* Underline for links */
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 1px;
          background: gold;
          transition: width 0.3s ease;
        }

        
        .nav-links a:hover {
          color: gold;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        
        .nav-links a.active-link {
          color: gold;
        }

        .nav-links a.active-link::after {
          width: 100%;
        }
      `}</style>

      <nav className="navbar">
        <h1 className="logo">KAUSHIK</h1>

        <div className="nav-links">
          <Link to="/" className={isActive("/") ? "active-link" : ""}>
            Home
          </Link>
          <Link to="/about" className={isActive("/about") ? "active-link" : ""}>
            About
          </Link>
          <Link to="#work" className={isActive("/work") ? "active-link" : ""}>
            Work
          </Link>
          <Link to="/contact" className={isActive("/contact") ? "active-link" : ""}>
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
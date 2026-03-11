import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Blog", path: "/blog" },
];



const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2.5rem",
        height: "68px",
        background: scrolled ? "rgba(20, 38, 73, 0.95)" : "rgba(20, 38, 73, 0.6)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(255,77,90,0.15)",
        transition: "background 0.3s ease",
      }}>

        {/* Logo */}
        <Link
          to="/"
          onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0 }); }}
          style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", userSelect: "none", textDecoration: "none" }}
        >
          <div style={{
            width: 36, height: 36, borderRadius: "10px",
            background: "linear-gradient(135deg, #FF4D5A, #ff8a93)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: "1rem", color: "#fff",
            boxShadow: "0 4px 16px rgba(255,77,90,0.4)",
          }}>K</div>
          <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "#FF4D5A", letterSpacing: "0.02em" }}>
            Kaushik
          </span>
        </Link>

        <ul className="nav-desktop-links" style={{
          display: "flex", gap: "0.25rem", listStyle: "none",
          margin: 0, padding: 0, alignItems: "center",
        }}>
          {navLinks.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                onClick={() => window.scrollTo({ top: 0 })}
                className="nav-link-btn"
                style={{
                  position: "relative",
                  padding: "0.4rem 1rem",
                  display: "inline-block",
                  textDecoration: "none",
                  color: isActive(path) ? "#FF4D5A" : "rgba(255,255,255,0.65)",
                  fontWeight: isActive(path) ? 600 : 400,
                  fontSize: "0.9rem", letterSpacing: "0.03em",
                  transition: "color 0.2s ease",
                }}
              >
                {label}
                {isActive(path) && (
                  <span style={{
                    position: "absolute",
                    bottom: -2, left: "1rem", right: "1rem",
                    height: 2, borderRadius: 2,
                    background: "#FF4D5A",
                    display: "block",
                  }} />
                )}
              </Link>
            </li>
          ))}

          <li style={{ marginLeft: "0.75rem" }}>
            <button
              className="nav-cta-btn"
              style={{
                border: "1.5px solid #FF4D5A",
                background: "transparent",
                color: "#fff",
                padding: "0.4rem 1.2rem",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "0.875rem",
                cursor: "pointer",
                fontFamily: "inherit",
                display: "flex", alignItems: "center", gap: "6px",
                transition: "background 0.2s ease, color 0.2s ease",
              }}
            >
              Let's Talk
            </button>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-hamburger"
          style={{
            display: "none", flexDirection: "column", gap: "5px",
            background: "none", border: "none", cursor: "pointer", padding: "4px",
          }}
        >
          <span style={{
            display: "block", width: "24px", height: "2px",
            background: "#fff", borderRadius: "2px",
            transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
            transition: "transform 0.25s ease",
          }} />
          <span style={{
            display: "block", width: "24px", height: "2px",
            background: "#fff", borderRadius: "2px",
            opacity: menuOpen ? 0 : 1,
            transition: "opacity 0.25s ease",
          }} />
          <span style={{
            display: "block", width: "24px", height: "2px",
            background: "#fff", borderRadius: "2px",
            transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            transition: "transform 0.25s ease",
          }} />
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          position: "fixed", top: 68, left: 0, right: 0, zIndex: 998,
          background: "rgba(20, 38, 73, 0.97)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,77,90,0.2)",
          padding: "1.5rem 2rem",
          display: "flex", flexDirection: "column", gap: "0.25rem",
        }}>
          {navLinks.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0 }); }}
              className="mobile-link-btn"
              style={{
                background: "none", border: "none", textAlign: "left",
                padding: "0.85rem 0.5rem", fontSize: "1.1rem",
                fontWeight: isActive(path) ? 700 : 400,
                color: isActive(path) ? "#FF4D5A" : "rgba(255,255,255,0.75)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                cursor: "pointer", fontFamily: "inherit",
                letterSpacing: "0.03em", width: "100%",
                textDecoration: "none", display: "block",
                transition: "color 0.2s ease",
              }}
            >
              {label}
              {isActive(path) && <span style={{ marginLeft: 8, color: "#FF4D5A", fontSize: "0.7rem" }}>●</span>}
            </Link>
          ))}
          <button
            onClick={() => { setMenuOpen(false); }}
            style={{
              marginTop: "1rem", background: "#FF4D5A", border: "none",
              borderRadius: "10px", color: "#fff", padding: "0.75rem",
              fontWeight: 700, fontSize: "0.95rem", cursor: "pointer",
              fontFamily: "inherit", transition: "background 0.2s ease",
            }}
          >
            Let's Talk
          </button>
        </div>
      )}

      <style>{`
        .nav-link-btn:hover { color: #FF4D5A !important; }
        .nav-cta-btn:hover { background: #FF4D5A !important; color: #fff !important; }
        .mobile-link-btn:hover { color: #FF4D5A !important; }
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile-drawer { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
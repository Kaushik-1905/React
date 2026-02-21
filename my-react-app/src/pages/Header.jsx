import React from "react";
import { Link } from "react-router-dom";

function Header() {

    const space = {
        padding:"10px",
        backgroundcolor:"gery",
        color:"green"
    }

  return (
    <div>
      <Link to="/" style={space}>Home</Link>
      <Link to="/about" style={space}>About</Link>
      <Link to="/contact" style={space}>Contact</Link>
      <Link to="/signup" style={space}>Signup</Link>
      <Link to="/login" style={space}>Login</Link>
    </div>
  );
}

export default Header;



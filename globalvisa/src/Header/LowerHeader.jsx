import React from 'react';
import { Link } from 'react-router-dom';

const container = {
  maxWidth: '100%',
  padding: '0 80px',
  borderBottom: '2px solid #c04b62'
};

const flex = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px'
};

const ul = {
  listStyle: 'none',
  display: 'flex',
  gap: '25px',
  margin: 0,
  padding: 0
};

const navLink = {
  textDecoration: 'none',
  color: 'black'
};

const quote = {
  textDecoration: 'none',
  backgroundColor: '#c04b62',
  color: 'white',
  padding: '8px 15px',
  borderRadius: '50px',
  fontWeight: '700',
  marginLeft: '10px'
};

const LowerHeader = () => {
  return (
    <div style={container}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 0'
      }}>

        {/* Logo */}
        <Link to="/">
          <img src="/logo.svg" alt="Logo" style={{ height: '30px' }} />
        </Link>

        {/* Nav */}
        <ul style={ul}>
          <li><Link to="/" style={navLink}>Home</Link></li>
          <li><Link to="/about" style={navLink}>About</Link></li>
          <li><Link to="/visa" style={navLink}>Visa</Link></li>
          <li><Link to="/pages" style={navLink}>Pages</Link></li>
          <li><Link to="/blog" style={navLink}>Blog</Link></li>
          <li><Link to="/contact" style={navLink}>Contact</Link></li>
        </ul>

        {/* Right Section */}
        <div style={flex}>
          <Link to="/">
            <img src="/search.svg" alt="Search" style={{ height: '25px' }} />
          </Link>

          <Link to="/" style={quote}>Get A Quote</Link>
        </div>

      </div>
    </div>
  );
}

export default LowerHeader;
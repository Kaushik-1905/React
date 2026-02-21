import React from 'react';
import { BiBorderRadius } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const container = {
  maxWidth: '1600px',
  // margin: '0 38.8px',
  padding: '0 80px',
  borderBottom: '2px solid #c04b62'
}

const ul = {
  listStyle: 'none',
  display: 'flex'
}

const li = {
  padding: '10px',
  textDecoration: 'none',
  color: 'black'
}

const quote = {
  textDecoration: 'none',
  display: 'block',
  backgroundColor:'#c04b62',
  color:'white',
  padding:'8px 10px',
  borderRadius:'50px',
  fontWeight: '700',
  margin:'0 0 0 20px' 
}



const Nav = () => {
  return (
    <div style={container}>

      {/* Upper Header */}
      <div>

      </div>

      {/* Lower Header */}
      <div style={{display: 'flex',justifyContent: 'space-between',alignItems: 'center',padding: '20px 0px',}}>

        {/* Logo Section */}
        <Link to="/">
          <img src="/logo.svg" alt="Logo" style={{ height: '30px' }} />
        </Link>

        {/* Nav Bar */}
        <ul style={ul}>
          <li><Link to='/' style={li}>Home</Link></li>
          <li><Link to='/about' style={li}>About</Link></li>
          <li><Link to='/visa' style={li}>Visa</Link></li>
          <li><Link to='/pages' style={li}>Pages</Link></li>
          <li><Link to='/blog' style={li}>Blog</Link></li>
          <li><Link to='/contact' style={li}>Contact</Link></li>
        </ul>

        {/* Icon */}
        <div style={{ display: 'flex' }}>
          <Link to='/'>
            <img src="/search.svg" alt="" style={{ height: '25px' }} />
          </Link>

          <Link to='/' style={quote}>Get A Quote</Link>

        </div>
      </div>
    </div>
  );
}

export default Nav;

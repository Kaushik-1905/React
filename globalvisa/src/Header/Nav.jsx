import React from 'react';
import { Link } from 'react-router-dom';
import {
  RiMailLine,
  RiMapPinFill,
  RiFacebookCircleFill,
  RiLinkedinFill,
  RiInstagramLine
} from 'react-icons/ri';

const container = {
  maxWidth: '100%',
  padding: '0 80px',
  borderBottom: '2px solid #c04b62',
  backgroundColor: '#c04b62',
  margin: '0',
};

const flex = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  color: 'white'
};

const header = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 0',
  maxWidth: '100%',

};


const textReset = {
  margin: 0,
};

const text = {
  color: 'white',
  textDecoration: 'none',
}






const Nav = () => {
  return (
    <>
      <style>
        {`
          .social-icon {
            color: white;
            transition: color 1s ease;
            cursor: pointer;
          }

          .social-icon:hover {
            color: black;
          }

          .nav-link {
    position: relative;
    color: white;
    text-decoration: none;
    padding-bottom: 4px;
  }

  .nav-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 2s ease;   
  }

  .nav-link:hover::after {
    width: 100%;
  }
          
        `}
      </style>

      <div style={container}>
        {/* Upper Header */}
        <div style={header}>
          <div style={flex}>
            <div style={flex}>
              <RiMailLine />
              <p style={textReset}>info@example.com</p>
            </div>

            <div style={flex}>
              <RiMapPinFill />
              <p style={textReset}>
                55 Main Street, 2nd block, Melbourne, Australia
              </p>
            </div>
          </div>

          <div style={flex}>
            <RiFacebookCircleFill className="social-icon" />
            <RiLinkedinFill className="social-icon" />
            <RiInstagramLine className="social-icon" />

            <Link className="nav-link" to="/">Help</Link>
            <Link className="nav-link" to="/support">Support</Link>
            <Link className="nav-link" to="/faq">FAQ</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
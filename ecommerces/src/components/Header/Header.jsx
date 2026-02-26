import React from 'react';
import "../../assets/style/global.css";
import "../../assets/style/utilities.css";
import "./Header.css";
import "../../assets/style/global.css"
import logo from "../../assets/images/logo-15.svg";

import {
  RiUserLine,
  RiHeartLine,
  RiHandbagLine
} from "react-icons/ri";


const Header = () => {
  return (
    <div className='header'>
      <div className='upperheader'>
        <div className="flex" style={{ justifyContent: 'space-between', padding: '0 40px' }}>
          <div className='flex'>
            <span>Free exchange</span>
            <p>of product within 30 days</p>
          </div>
          <div className='flex'>
            <span>Premium brand product</span>
            <p>for an affordable price</p>
          </div>
          <div className='flex'>
            <span>100% MONEY BACK</span>
            <p>guarantee</p>
          </div>
        </div>
      </div>


      <div className='lowerheader'>
        <div className="logo">
          <img src={logo} alt="Logo" style={{ width: "200px" }} />
        </div>

        <div className="search-section">
          <input type="text" placeholder='Search our store' />

          <div className="icons">
            <RiUserLine />
            <RiHeartLine />
            <RiHandbagLine />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

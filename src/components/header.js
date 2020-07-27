import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
        <h1 className="pageHeader">Silent Auction</h1>
        <div className='nav-links'>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
    )
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
        <h1 className="pageHeader">Λambda Silent Auctions</h1>
        <div className='nav-links'>
          {/* <Link to="/">Home</Link> */}
          {/* <Link to="/about-us">About</Link> */}
          {/* <Link to="/team">Team</Link> */}
          <span><a href='https://youthful-panini-72624e.netlify.app/index.html'>Home</a></span>
          <span><a href='https://youthful-panini-72624e.netlify.app/about.html'>About</a></span>
          <span><a href='https://youthful-panini-72624e.netlify.app/team.html'>Team</a></span>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/auctions">Auctions</Link>
          <Link to="/createAuction">Add-Auction</Link>
        </div>
      </nav>
    )
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <h1>Wav</h1>
      <div className='nav-div'>
        <h3><Link to="/" style={{textDecoration:"none"}}>Home</Link></h3>
        <h3><Link to="/about" style={{textDecoration:"none"}}>About</Link></h3>
        <h3><Link to="/contact" style={{textDecoration:"none"}}>Contact</Link></h3>
        <h3><Link to="/service" style={{textDecoration:"none"}}>Service</Link></h3>
      </div>
    </nav>
  );
}

export default Nav;

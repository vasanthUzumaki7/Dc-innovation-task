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
        <h3><Link to="/servicelist" style={{textDecoration:"none"}}>Service</Link></h3>
        <h3><Link to="/users" style={{textDecoration:"none"}}>Users</Link></h3>
        <h3><Link to="/billing-details" style={{textDecoration:"none",color:"black"}}>Billings</Link></h3>
        <h3><Link to="/policylist" style={{textDecoration:"none"}}>Policy Details</Link></h3>
      </div>
      <button><Link to='/account' style={{textDecoration:"none",color:"white"}}> Create Account</Link></button>
    </nav>
  );
}

export default Nav;

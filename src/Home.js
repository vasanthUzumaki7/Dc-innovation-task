import React from 'react'
import { IoIosHome } from "react-icons/io";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div  className='container'>
      <button> <Link to='/account'> Create Account</Link></button>
      <IoIosHome className='icon'/>
      <h1>welcome to the Home page</h1>
      <p>i love to create! i am a front end developer</p>
    </div>
  )
}

export default Home

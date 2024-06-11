import React from 'react'
import { GiSwordman } from "react-icons/gi";
import { MdOutlineCastle } from "react-icons/md";
import { MdOutlineHomeRepairService } from "react-icons/md";


const Profilepage = () => {
  return (
    <div className='profile-page-container'>
      <div className='profile-page-head'>
        <h1>Welcome to Your Profile</h1>
        <p>Enter Daily Amount</p>
        <input type="text" />
        <button>Submit</button>
      </div>
      <div className='profile-page-body'>
      <div>
      <GiSwordman className='profile-body-logo'/>
      <h2>Total Amount: 0.00</h2>
      </div>
      <div>
      <MdOutlineCastle className='profile-body-logo'/>
      <h2>Total Dept Collected: 0.00</h2>
      </div>
      <div>
      <MdOutlineHomeRepairService className='profile-body-logo'/>
      <h2>Daily Stock Amount:0.00</h2>
      </div>
      </div>
      <button className='profile-page-button'>Go to Billing Section</button>
    </div>
  )
}

export default Profilepage

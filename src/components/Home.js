import React from 'react'
import { FaMoneyBill } from "react-icons/fa";
import { VscGraphLine } from "react-icons/vsc";
import { FaMoneyCheck } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
import Profilepage from './Profilepage';

const Home = () => {
  return (
    <>
    <Profilepage/>
    <div  className='home-container'>
      <div className='home-head'>
     <div style={{backgroundColor:"rgb(188, 214, 232)"}}>
     <FaMoneyBill className='home-logo'/>
     <h1>Total Amount Collected</h1>
     <p>0</p>
     </div>
     <div style={{backgroundColor:"rgb(235, 179, 174)"}}>
     <VscGraphLine className='home-logo'/>
     <h1>Total Profit Earned</h1>
     <p>0</p>
     </div>
     <div style={{backgroundColor:"rgb(188, 214, 232)"}}>
     <FaHandHoldingUsd className='home-logo'/>
     <h1>Total Dept Collected</h1>
     <p>0</p>
     </div>
     <div style={{backgroundColor:"rgb(235, 179, 174)"}}>
     <FaMoneyCheck className='home-logo'/>
     <h1>Total Bank Amount Transferred</h1>
     <p>0</p>
     </div>
     </div>
     <h1>Staff Totals</h1>
     <table>
      <thead>
        <tr style={{backgroundColor:"rgb(179, 177, 177)"}}>
          <td>ID</td>
          <td>Name</td>
          <td>Total Amount Collected</td>
          <td>Total Dept Collected</td>
          <td>Total Bank Amount Transferred</td>
          <td>Open Amount</td>
          <td>Close Amount</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Gowshik Prabhu</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Raju</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Peter</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </tbody>
     </table>
    </div>
    </>
  )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Policylist = ({policyData,formEdit}) => {
    const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPolicies = policyData.filter(policy =>
    policy.mobileNumber.includes(searchQuery)
  );

  return (
    <div className='policylist-container'>
      <h1>Policy Details</h1>
      <div className='policylist-head'>
        <div style={{display:"flex"}}>
        <label htmlFor="search">Search</label>
        <input type="number" id='search' placeholder='Search number'  value={searchQuery}
            onChange={handleSearchChange} style={{marginLeft:"10px"}}/>
        </div>
        <div style={{display:"flex"}}>
            <button><Link to="/policy" style={{textDecoration:"none"}}>Add Policy</Link></button>
            <button>Due Policies</button>
            <button>Download by excel</button>
        </div>
      </div>

      <table className='policylist-table'>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Mobile number</td>
                    <td>Vehicle number</td>
                    <td>Company</td>
                    <td>Policy number</td>
                    <td>From Date</td>
                    <td>To Date</td>
                    <td>Amount</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
            {filteredPolicies.map((item)=>(
                <tr key={item.id}>
                 <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.mobileNumber}</td>
                <td>{item.vehicleNumber}</td>
                <td>{item.company}</td>
                <td>{item.policyNumber}</td>
                <td>{item.fromDate}</td>
                <td>{item.toDate}</td>
                <td>{item.amount}</td>
                <td >
                   <button onClick={() => formEdit(item)}><Link to="/policy" style={{ textDecoration: "none" }}>Edit</Link></button>
                </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Policylist

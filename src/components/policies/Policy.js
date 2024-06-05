import React from 'react'
import { useNavigate } from 'react-router-dom'

const Policy = ({policyForm,formChange,formSubmit}) => {
  const navigate=useNavigate()
  const firstSubmit=(e)=>{
    e.preventDefault()
    formSubmit(e);
    navigate('/policylist')
  }
  return (
    <div className='policy-input-container'>
      <h1>Add or Edit policy</h1>
      <div>
      <form onSubmit={firstSubmit}>
      <p>Name</p>
      <input type="text" required onChange={formChange} name='name' value={policyForm.name}/>
      <p>Mobile Number</p>
      <input type="text" required onChange={formChange} name='mobileNumber' value={policyForm.mobileNumber}/>
      <p>Vehicle Number</p>
      <input type="text" required  onChange={formChange} name='vehicleNumber' value={policyForm.vehicleNumber}/>
      <p>Company</p>
      <input type="text" required onChange={formChange} name='company' value={policyForm.company}/>
      <p>Policy Number</p>
      <input type="text" required onChange={formChange} name='policyNumber' value={policyForm.policyNumber}/>
      <p>From Date</p>
      <input type="date" required  onChange={formChange} name='fromDate' value={policyForm.fromDate}/>
      <p>To Date</p>
      <input type="date" required onChange={formChange} name='toDate' value={policyForm.toDate}/>
      <p>Amount</p>
      <input type="text" required onChange={formChange} name='amount' value={policyForm.amount}/><br />
      <button type='submit'>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Policy

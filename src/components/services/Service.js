import React from 'react'
import { useNavigate } from 'react-router-dom';

const Service = ({handleSubmit,handleChange,formData}) => {
  const navigate=useNavigate()

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
    navigate('/servicelist');
  };
  return (
    <div className='service-container'>
        <form onSubmit={onSubmit}>
      <h1>Create & Edit Services</h1>
      <p>Service Name</p>
      <input type="text" required onChange={handleChange} name='serviceName' value={formData.serviceName}/>
      <p>Amount</p>
      <input type="number" required onChange={handleChange} name='amount' value={formData.amount}/>
      <p>Government Amount</p>
      <input type="number" required  onChange={handleChange} name='governmentAmount' value={formData.governmentAmount}/>
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Service

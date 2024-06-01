import React, { useState } from 'react'

const Form = () => {
    const[formData,setFormData]=useState({
        firstname:'',
        lastname:'',
        password:''
    })
   const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormData((item)=>({
        ...item,
        [name]:value
    }))
    console.log(formData)
}
   const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData)
   setFormData(
    {
        firstname:'',
        lastname:'',
        password:''
    }
   )
    
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='firstname' name='firstname' value={formData.firstname} onChange={handleChange}/>
        <input type="text" placeholder='lastname' name='lastname' value={formData.lastname} onChange={handleChange}/>
        <input type="text" placeholder='password' name='password' value={formData.password} onChange={handleChange}/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Form

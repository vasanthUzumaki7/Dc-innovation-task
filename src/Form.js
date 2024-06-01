import React, { useState,useEffect } from 'react'

const Form = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('dataArray')) || [];
    setDataArray(storedData);
}, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = { firstName, lastName, password };
    const updatedDataArray = [...dataArray, formData];

    setDataArray(updatedDataArray);
    localStorage.setItem('dataArray', JSON.stringify(updatedDataArray));

    setFirstName('');
    setLastName('');
    setPassword('');
};
    
  return (
    <>
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
       <input  type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}/>
       <input type="text" id="lastName"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}/>
       <input type="text"  id="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}/>
      <button type='submit'>submit</button>
      </form>
      <div>
                <h2 style={{margin:"10px"}}>Stored Data</h2>
                <ul>
                    {dataArray.map((data, index) => (
                        <li key={index}>
                            {data.firstName} {data.lastName} - {data.password}
                        </li>
                    ))}
                </ul>
            </div>
    </div>
    
    </>
    
  )
}

export default Form

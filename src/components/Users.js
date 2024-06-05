import React, { useState, useEffect } from 'react';
import Loader from '../loader/Loader';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {

                await new Promise(loadings => setTimeout(loadings, 2000));

                
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const formattedData = data.map(user => ({
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    city: user.address.city
                }));
                setUsers(formattedData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Loader/>
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
  return (
    <div className='users-container'>
       <h1 style={{marginBottom:"20px"}}>User Data</h1>
            <div style={{border:"1px solid black",padding:"10px",borderRadius:"10px"}}>
                {users.map((user, index) => (
                    <div key={index}>
                        <p>Name: {user.name}</p><br />
                        <p>Username: {user.username} </p><br />
                        <p>Email: {user.email} </p><br />
                        <p>City: {user.city}</p> 
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Users





import React from 'react'
import { Link } from 'react-router-dom';

const Servicelist = ({handleDelete,services,handleEdit}) => {
   
  return (
    <div className='service-list-container'>

        <div className='service-list-head'>
        <h1>Services List</h1>
        <button><Link to="/service-edit" style={{textDecoration:"none"}}>Add New service</Link></button>
        </div>
        
        <table>
            <thead>
                <tr>
                    <td>Service Name</td>
                    <td>Amount</td>
                    <td>Government Amount</td>
                </tr>
            </thead>
            <tbody>
            {services.map((item)=>(
                <tr key={item.id}>
                <td>{item.serviceName}</td>
                <td>{item.amount}</td>
                <td className="action-cell">
                    <span className="amount">{item.governmentAmount}</span>
                    <span className="buttons">
                      <button onClick={() => handleEdit(item)}>
                         <Link to="/service-edit" style={{ textDecoration: "none" }}>Edit</Link>
                      </button>
                        <button style={{marginLeft:"10px"}} onClick={()=>(handleDelete (item.id))}>Delete</button>
                    </span>
                </td>
                </tr>
                ))}
            </tbody>
        </table>
      
    </div>
  )
}

export default Servicelist

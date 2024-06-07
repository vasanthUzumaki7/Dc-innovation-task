import React from 'react';
import { Link } from 'react-router-dom';

const Role = ({ roleData, deleteRole, roleEdit }) => {
  return (
    <div className='role-container'>
      <div>
      <h1>Role Data</h1>
      <button><Link to="/addrole" style={{ textDecoration: "none" }}>Add Role</Link></button>
      </div>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Mobile Number</td>
            <td>Role</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {roleData.map((role) => (
            <tr key={role.id}>
              <td>{role.id}</td>
              <td>{role.name}</td>
              <td>{role.mobile}</td>
              <td>{role.role}</td>
              <td style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                <Link to="/addrole" style={{ textDecoration: "none" }}>
                  <button onClick={() => roleEdit(role)}>Edit</button>
                </Link>
                <button onClick={() => deleteRole(role.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Role;

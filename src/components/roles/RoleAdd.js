import React from 'react';

const RoleAdd = ({ addRole, setAddRole, roleChange, roleSubmit }) => {

  const roleSubmission = (e) => {
    e.preventDefault();
    roleSubmit(e);
    setAddRole({
      id: null,
      name: "",
      mobile: "",
      role: "",
      password: "",
    });
  }

  return (
    <div className='roleAdd-container'>
      <h1>{addRole.id ? "Edit Role" : "Add Role"}</h1>
      <form onSubmit={roleSubmission} style={{marginTop:"20px"}}>
        <label>Mobile Number</label><br />
        <input required type="text" name="mobile" value={addRole.mobile} onChange={roleChange} /><br />
        <label>Password</label><br />
        <input required type="text" name="password" value={addRole.password} onChange={roleChange} /><br />
        <label>Name</label><br />
        <input required type="text" name="name" value={addRole.name} onChange={roleChange} /><br />
        <label>Role</label><br />
        <select required name="role" value={addRole.role} onChange={roleChange}>
          <option value="">Select role</option>
          <option value="Admin">Admin</option>
          <option value="Superadmin">Superadmin</option>
        </select><br />
        <button type="submit">{addRole.id ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
}

export default RoleAdd;

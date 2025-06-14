import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/Button';
import Sidebar from '../molecules/Sidebar';
import '../../styles/User.css'

const User = () => {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  return (
    <div className='user'>
      <h2>UserList</h2>
      <Sidebar />
      <div className='adduser'>
      <Button label="Add User" onClick={() => navigate('/add-user')}/>
      </div>
      {users.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Sr. no.</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u: any, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users added yet.</p>
      )}
    </div>
  );
};

export default User;

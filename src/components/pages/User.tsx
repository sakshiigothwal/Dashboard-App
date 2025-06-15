import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/Button';
import Sidebar from '../molecules/Sidebar';
import '../../styles/User.css';
import axios from 'axios';

const User = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='user'>
      <Sidebar />
      <h2>User List</h2>
      <div className='adduser'>
        <Button label="Add User" onClick={() => navigate('/add-user')} />
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
              <tr key={u.id}>
                <td>{index + 1}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users</p>
      )}
    </div>
  );
};

export default User;

import React, { useRef } from 'react';
import Sidebar from '../molecules/Sidebar';

const AddUser = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleAdd = () => {
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;

    if (name && email) {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      users.push({ name, email });
      localStorage.setItem('users', JSON.stringify(users));
      alert('User added');
    }
  };

  return (
    <div>
        <Sidebar/>
      <h2>Add User</h2>
      <input ref={nameRef} placeholder="Name" />
      <input ref={emailRef} placeholder="Email" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddUser;

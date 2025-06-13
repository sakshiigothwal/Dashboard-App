import React, { FormEvent, useState } from 'react';

import Button from '../atoms/Button';
import Form from '../molecules/Form';
import '../../styles/LogIn.css';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setError((prev) => ({ ...prev, [name]: '' }));
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    let valid = true;
    const newError = { email: '', password: '' };

    if (!data.email) {
      newError.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newError.email = 'Email is invalid';
      valid = false;
    }

    if (!data.password) {
      newError.password = 'Password is required';
      valid = false;
    } else if (data.password.length < 8) {
      newError.password = 'Password hast o be at least 8 characters';
      valid = false;
    }

    setError(newError);
    return valid;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (validate()) {
      if (validate()) {
        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

        const matchedUser = existingUsers.find(
          (user: any) =>
            user.email.toLowerCase() === data.email.toLowerCase() &&
            user.password === data.password,
        );

        if (matchedUser) {
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('currentUser', JSON.stringify(matchedUser));
          navigate('/');
        } else {
          setError((prev) => ({
            ...prev,
            email: 'Invalid email or password',
            password: 'Invalid email or password',
          }));
        }
      }
    }
  };

  return (
    <div className="login">
      <div className="box">
        <form onSubmit={handleSubmit}>
          <Form
            label="Email :"
            name="email"
            type="email"
            placeholder="Enter email"
            value={data.email}
            onChange={handleChange}
            onFocus={() => {}}
            error={error.email}
          />

          <Form
            label="Password :"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={handleChange}
            onFocus={() => {}}
            error={error.password}
          />

          <Button label="login" type="submit" onClick={() => {}} />
        </form>
      </div>
    </div>
  );
};

export default LogIn;

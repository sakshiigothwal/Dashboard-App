import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../molecules/Form';
import Button from '../atoms/Button';
import '../../styles/RegisterForm.css';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    let isValid = true;
    const newError = { name: '', email: '', password: '', confirmPassword: '' };

    if (!data.name) {
      newError.name = 'Name is required';
      isValid = false;
    }

    if (!data.email) {
      newError.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newError.email = 'Invalid email';
      isValid = false;
    }

    if (!data.password) {
      newError.password = 'Password is required';
      isValid = false;
    } else if (data.password.length < 8) {
      newError.password = 'Password must be at least 8 characters';
      isValid = false;
    }

    if (data.confirmPassword !== data.password) {
      newError.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
  e.preventDefault();

  if (validate()) {
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

    const userExists = existingUsers.some((user: any) => user.email === data.email);
    if (userExists) {
      setError((prev) => ({
        ...prev,
        email: 'Email is already registered',
      }));
      return;
    }

    const newUser = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));

    navigate('/login');
  }
};


  return (
    <div className="register">
      <div className="box">
        <form onSubmit={handleSubmit}>
          <Form
            label="Name :"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={data.name}
            onChange={handleChange}
            onFocus={() => {}}
            error={error.name}
          />

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
            placeholder="Enter password"
            value={data.password}
            onChange={handleChange}
            onFocus={() => {}}
            error={error.password}
          />

          <Form
            label="Confirm Password :"
            name="confirmPassword"
            type="password"
            placeholder="Re-enter password"
            value={data.confirmPassword}
            onChange={handleChange}
            onFocus={() => {}}
            error={error.confirmPassword}
          />

          <Button label="Register" type="submit" onClick={() => {}} />
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;

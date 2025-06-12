import React, { FormEvent, useState } from 'react';
import Button from '../atoms/Button';
import Form from '../molecules/Form';
import '../../styles/LogIn.css';

const LogIn = () => {
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
    newError.password = 'Password hast 0 be at least 8 characters';
    valid = false;
  }

  setError(newError);
  return valid;
};


  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if(validate()){
    alert('Submit');
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
            error = {error.password}
          />

          <Button label="login" type="submit" onClick={()=>{}} />
        </form>
      </div>
    </div>
  );
};

export default LogIn;

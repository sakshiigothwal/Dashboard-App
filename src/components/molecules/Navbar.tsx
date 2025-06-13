import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Navbar.css';
import Button from '../atoms/Button';
import Search from '../../images/search.svg'

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    alert("blogs or user will be searched")
  };
  const handleRegister = () => {
    navigate('/register')
  }
const handleLogin = () => {
    navigate('/login');
  };
  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/');
  };

  return (
    <nav className="navbar">
        <h2 className="header">Dashboard</h2>
        <input
          type="text"
          placeholder="Search users or blogs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
       <Button
  label={
    <img
      src={Search} alt=""
      className="search"
    />
  }
  onClick={handleSearch}
/>
        {!isLoggedIn ? (
          <Button label='LogIn'onClick={handleLogin}/>
        ) : (
          <Button label='LogOut' onClick={handleLogout}/>
        )}
        <Button label ="Register" onClick={handleRegister}/>
    </nav>
  );
};

export default Navbar;

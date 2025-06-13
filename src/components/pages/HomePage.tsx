import React from 'react';
import '../../styles/HomePage.css'
import Sidebar from '../molecules/Sidebar';

const HomePage = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return (
    <div className={`app-layout ${isLoggedIn ? 'with-sidebar' : ''}`}>
      {isLoggedIn && <Sidebar />}
    <div className='home'>

      <h1>Dashboard Home Page</h1>
    </div>
    </div>
  );
};

export default HomePage;


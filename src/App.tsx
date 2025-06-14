import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/templates/Footer';
import Header from './components/templates/Header';
import HomePage from './components/pages/HomePage';
import User from './components/pages/User';
import BlogDetails from './components/pages/BlogDetails';
import BlogList from './components/pages/BlogList';
import UserDetails from './components/pages/UserDetails';
import LogInPage from './components/pages/LogInPage';
import Register from './components/pages/Register';
import AddUser from './components/pages/AddUser';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
   useEffect(() => {
    const interval = setInterval(() => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/users"
            element={isLoggedIn ? <User /> : <LogInPage />}
          />
          <Route
            path="/users/:id"
            element={isLoggedIn ? <UserDetails /> : <LogInPage />}
          />
          <Route
            path="/blogs"
            element={isLoggedIn ? <BlogList /> : <LogInPage />}
          />
          <Route
            path="/blogs/:id"
            element={isLoggedIn ? <BlogDetails /> : <LogInPage />}
          />
          <Route
            path="/add-user"
            element={isLoggedIn ? <AddUser /> : <LogInPage />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

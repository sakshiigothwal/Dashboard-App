import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

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

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

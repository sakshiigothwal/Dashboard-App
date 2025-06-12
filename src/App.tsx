import React from 'react';

import './App.css';
import Footer from './components/organism/Footer';
import Header from './components/organism/Header';
import LogIn from './components/organism/LogIn';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Hello World</h1>
      <LogIn/>
      <Footer/>
    </div>
  );
}

export default App;

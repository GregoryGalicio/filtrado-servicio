import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Footer from './componets/footer/Footer'

function App() {
  const[darkMode,setDarkMode]=useState(false);
  
  const handleClick = () => {
        setDarkMode(!darkMode);
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;

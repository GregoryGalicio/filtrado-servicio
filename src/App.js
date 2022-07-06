import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Footer from './componets/Footer/Footer'

function App() {
  const[darkMode,setDarkMode]=useState(false);
  
  const handleClick = () => {
        setDarkMode(!darkMode);
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Gregory
        </a>
        <Footer darkMode={darkMode}/>
      </header>
    </div>
  );
}

export default App;

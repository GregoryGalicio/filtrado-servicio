import React, { useState } from 'react'
//import logo from './logo.svg';
import './App.css';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";


function App() {
  const[darkMode,setDarkMode]=useState(false);
  
  const handleClick = () => {
        setDarkMode(!darkMode);
    }
  return (
    <div className="App">
      <Header darkMode={darkMode} onClick={handleClick}/>
      <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;

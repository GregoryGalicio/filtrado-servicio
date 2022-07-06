import React, { useState } from 'react'
import './App.css';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Cards  from './components/cards/Cards';




function App() {
  const[darkMode,setDarkMode]=useState(false);
  
  const handleClick = () => {
        setDarkMode(!darkMode);
    }
  return (
    <div className="App">
      <Header darkMode={darkMode} onClick={handleClick}/>
      <Cards  darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;

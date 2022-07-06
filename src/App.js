import React, { useState } from 'react'
import './App.css';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Body from './components/body/Body';




function App() {
  const[darkMode,setDarkMode]=useState(false);
  
  const handleClick = () => {
        setDarkMode(!darkMode);
    }
  return (
    <div className="App">
      <Header darkMode={darkMode} onClick={handleClick}/>
      <Body darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;

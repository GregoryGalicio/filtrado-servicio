import React, { useState } from 'react'
import './App.css';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import CrudApp from './components/crudApp/CrudApp';
import Filter from './components/filter/Filter';


function App() {
  const[darkMode,setDarkMode]=useState(false);
  const[type,setType]= useState("todos");
  
  const handleClick = () => {
        setDarkMode(!darkMode);
    }
  return (
    <div className="App">
      <Header darkMode={darkMode} onClick={handleClick}/>
      <Filter darkMode={darkMode} type={type} setType={setType}/>
      <CrudApp darkMode={darkMode} type={type} setType={setType} />
      <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;

import React from 'react'
import Cards from '../cards/Cards'
import CrudApp from '../crudApp/CrudApp'
import "./Body.css";


const Body = ({darkMode}) => {
  return (
    <div className='body'>
        <Cards darkMode={darkMode}/>
        <CrudApp/>
    </div>
  )
}

export default Body
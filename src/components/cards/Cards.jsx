import React, { useState,useEffect } from 'react';
//import { serviceData } from '../../serviceDataBase';
import "./Cards.css";

const Cards = ({darkMode, data, setDataToEdit,deleteData}) => {
    // let{id}=el;
    // const [cards, setCards]= useState([]);
    
    // useEffect(() => {
    //      setCards(serviceData);
    // }, [])

    return (
        <div className={darkMode?'cardsDark':"cards" }>
            {data.map(data =>(
                <div  
                key={data.id}
                // el={el} 
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
                className={darkMode?'cardsBoxDark':'cardsBox'}>
                    <div className='information'>
                        <h1 className='name'>{data.name}</h1>
                        <h2>{data.description}</h2>
                    </div>
                    <div className='btn'>
                        <button onClick={() => setDataToEdit(data)}>Editar</button>
                        <button onClick={() => deleteData(data.id)}>Eliminar</button>
                    </div>
                </div>     
            ))}
            
        </div>
    );
}

export default Cards;

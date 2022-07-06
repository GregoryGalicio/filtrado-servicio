import React, { useState,useEffect } from 'react';
import { serviceData } from '../../serviceDataBase';
import "./Cards.css";

const Cards = ({darkMode}) => {
    const [cards, setCards]= useState([]);
    
    useEffect(() => {
         setCards(serviceData);
    }, [])

    return (
        <div className={darkMode?'cardsDark':"cards" }>
            {cards.map(serviceData =>(
                <div className={darkMode?'cardsBoxDark':'cardsBox'}>
                    <div className='information'>
                        <h1 className='name'>{serviceData.name}</h1>
                        <h2>{serviceData.description}</h2>
                    </div>
                    <div className='btn'>
                        <button>Editar</button>
                        <button>Eliminar</button>
                    </div>
                </div>     
            ))}
            
        </div>
    );
}

export default Cards;

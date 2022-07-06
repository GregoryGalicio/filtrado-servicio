import React from 'react'
import "./Toggle.css";

const Toggle = ({onClick,darkMode}) => {
    return (
        <button className={`${darkMode?"toggleDark":"toggle"}`} onClick={onClick}>
            <div className={`${darkMode?"notchDark":"notch"}`}></div>
            <div>
                <div className={`${darkMode?"shapeDark sm":"shape sm"}`}></div>
                <div className={`${darkMode?"shapeDark sm":"shape sm "}`}></div>
                <div className={`${darkMode?"shapeDark md":"shape md"}`}></div>
                <div className={`${darkMode?"shapeDark lg":"shape lg"}`}></div>
            </div>
        </button>
    );
}

export default Toggle;
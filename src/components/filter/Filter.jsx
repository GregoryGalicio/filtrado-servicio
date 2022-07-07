import React from "react";
import "./Filter.css";

const Filter = ({type, setType, darkMode}) => {
    function seleccionType (event){
        setType(event.target.value);
        console.log(`El tipo de servicio  seleccionado es ${type}`)
    }
    // const manejarClick =(event) =>{
    //     setType("todos")
    // };

    return (
        <div className={`${darkMode?"darkFiltros":"filtros"}`}>
            <button onClick={seleccionType} value="todos">Todos</button>
            <button onClick={seleccionType} value="autos">Autos</button>
            <button onClick={seleccionType} value="salud">Salud</button>
            <button onClick={seleccionType} value="hogar">Hogar</button>
            {/* <button onClick={manejarClick}>Limpiar</button> */}
        </div>
    )
}

export default Filter
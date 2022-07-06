
import React, { useState,useEffect } from 'react';
import { serviceData } from '../../serviceDataBase';

// const initialForm={
//     name:"",
//     description:"",
//     id: null,
// };


const CrudForm = () => {
    const [form, setForm] = useState([]);

    useEffect(() => {
        setForm(serviceData);
   }, [])


    const handleChange = (e) => {}
    const handleSubmit = (e) => {}
    const handleReset = (e) => {}



  return (
    <div>
        <h2>Agregar Servicio</h2>
        <form onSubmit={handleSubmit}>
            <h3>Nombre</h3>
            <input type="text" name='name' placeholder='Nombre' onChange={handleChange} value={form.name}/>
            <h3>Servicio</h3>
            <input type="text" name='description' placeholder='Descripción' onChange={handleChange} value={form.description}/>
            <br/>
            <input type="submit" value="Grabar"/>
            <input type="submit" value="Cancelar" onClick={handleReset}/>
        </form>
    </div>
  )
}

export default CrudForm
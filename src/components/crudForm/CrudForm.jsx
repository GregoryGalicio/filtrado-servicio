
import React, { useState,useEffect } from 'react';

const initialForm={
    name:"",
    description:"",
    id: null,
};


const CrudForm = () => {
    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {}
    const handleSubmit = (e) => {}
    const handleReset = (e) => {}



  return (
    <div>
        <h3>Agregar</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='Nombre' onChange={handleChange} value={form.name}/>
            <input type="text" name='description' placeholder='Descripción' onChange={handleChange} value={form.description}/>
            <input type="submit" value="Grabar"/>
            <input type="submit" value="Cancelar" onClick={handleReset}/>
        </form>
    </div>
  )
}

export default CrudForm
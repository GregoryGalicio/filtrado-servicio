
import React, { useState } from 'react';
import { serviceData } from '../../serviceDataBase';
import "./CrudForm.css";

const initialForm={
    name:"",
    description:"",
    id: null,
};


const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
    const [form, setForm] = useState(initialForm);

//     useEffect(() => {
//         setForm(serviceData);
//    }, [])

    // createData()
    const handleChange = (e) => {
        
        
        setForm({
            ...form,
            [e.target.name]:e.target.value,
           
        });
        console.log( e.target.value)
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.name || !form.description){
            alert("Complete los datos");
            return;
        }
        if(form.id===null){
            createData(form)
            console.log(createData(form))
        }
        else{
            updateData(form)
            // console.log;
        }
        handleReset();
    };

    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    }



  return (
    <div className='form'>
        <h2>Servicio</h2>
        <form onSubmit={handleSubmit}>
            <h3>Nombre</h3>
            <input 
            type="text" 
            name="name" 
            placeholder="Nombre" 
            onChange={handleChange} 
            value={form.name}/>
            <h3>Descripción</h3>
            
            <input 
            type="text" 
            name="description" 
            placeholder="Descripción" 
            onChange={handleChange} 
            value={form.description}/>
            <br/>
            <input type="submit" value="Enviar"/>
            <input type="reset" value="Cancelar" onClick={handleReset}/>
        </form>
    </div>
  );
}

export default CrudForm
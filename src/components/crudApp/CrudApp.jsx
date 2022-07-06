import React, {useState,useEffect} from 'react'
import Cards from '../cards/Cards';
import CrudForm from '../crudForm/CrudForm'
import "./CrudApp.css";
import { serviceData } from '../../serviceDataBase'

//  const initialDb= [
//   {
//     id:1,
//     name: "Electricidad",
//     description:"Problemas con la electricidad de su hogar, nosotros somos la solucion a un click de su servicio",
//     type: "Hogar"
//   },
//   {
//     id:2,
//     name: "Auxilio Mecanico",
//     description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     type: "Autos"
//   },]

const CrudApp = ({darkMode, data}) => {
  const [db, setDb]= useState(serviceData);
  const [dataToEdit, setDataToEdit] = useState(null);

    // useEffect(() => {
    //      setCards(serviceData);
    // }, [])

const createData = (data) => {
    data.id= Date.now();
    // console.log("QUe paooooosoo")
    setDb([...db,data]);
};

const updateData = (data) => {};

const deleteData = (id) => {};


  return (
    <div className='body'>
        <Cards 
        darkMode={darkMode}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
        data={db}
        key={db.id}
        />
        <div>
        <CrudForm 
        createData={createData} 
        updateData={updateData} 
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}/>
        </div>
        
        </div>
        
    
  )
}

export default CrudApp
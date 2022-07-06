import React, {useState} from 'react'
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
    //      setDb(serviceData);
    // }, [])

const createData = (data) => {
    data.id= Date.now();
    console.log(data)
    console.log(db)
    setDb([...db,data]);
};

const updateData = (data) => {
  let newData=db.map(el=>el.id===data.id? data:el);
  setDb(newData);
  //nueva base de datos que toma los datos ingresados en el update
};

const deleteData = (id) => {
  let isDelete = window.confirm(`Estas seguro de eliminar este servicio con registro de id ${id}?`);
  if(isDelete){
    let newData1=db.filter(el => el.id !==id)
    setDb(newData1);

  }else{

  }
};


  return (
    <div className='body'>
        <Cards 
        darkMode={darkMode}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
        data={db}
        // id={db.id}
        // key={db.id}
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
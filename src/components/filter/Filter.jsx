// import React /* { useState } It's not necesary use useState*/ from "react";
// import "./Filter.css";

// function Filter({
//   country,
//   size,
//   price,
//   dateFrom,
//   dateTo,
//   setCountry,
//   setSize,
//   setPrice,
//   setDateFrom,
//   setDateTo
// }) {
//   /*This Local states come from Global state App*/

//   function seleccionPais(event) {
//     setCountry(event.target.value);
//     console.log(`El pais seleccionado es ${country}`);
//   }

//   const seleccionTamaño = (event) => {
//     setSize(event.target.value);
//     console.log(`El tamaño seleccionado es ${size}`);
//   };

//   function seleccionPrecio(event) {
//     setPrice(event.target.value);
//     console.log(`El precio seleccionado es ${price}`);
//   }

  
  
//   /*Function manejarClick about button reset filters*/
//   const manejarClick = (event) => {
//     alert("Regreso a los valores iniciales, seleccione nuevamente");
//     setCountry("todos");
//     setSize("todos");
//     setPrice("todos");
//     setDateFrom("");
//     setDateTo("");
//   };

//   return (
//     <div className="Filters">
//       {/* <h1>Filtros</h1> */}
//       <div className="filtros-lista">
//         <div className="fecha desde">
//           <span>desde</span>
//           <input
//             onChange={seleccionarFechaIngreso}
//             type="datetime-local"
//             value={dateFrom}
//           />
//         </div>
//         <div className="fecha hasta">
//           <span>hasta</span>
//           <input
//             onChange={seleccionarFechaSalida}
//             type="datetime-local"
//             value={dateTo}
//           />
//         </div>
//         {/* filtro pais */}
//         <select onChange={seleccionPais} value={country}>
//           <option value="todos">Todos los paises</option>
//           <option value="argentina">Argentina</option>
//           <option value="brasil">Brasil</option>
//           <option value="chile">Chile</option>
//           <option value="uruguay">Uruguay</option>
//         </select>
//         {/* filtro precio */}
//         <select onChange={seleccionPrecio} value={price}>
//           <option value="todos">Cualquier Precio</option>
//           <option value="$">Económico</option>
//           <option value="$$">Confort</option>
//           <option value="$$$">Lujo</option>
//           <option value="$$$$">Magnífico</option>
//         </select>
//         {/* filtro tamaño */}
//         <select onChange={seleccionTamaño} value={size}>
//           <option value="todos">Cualquier Tamaño</option>
//           <option value="pequeño">Pequeño</option>
//           <option value="mediano">Mediano</option>
//           <option value="grande">Grande</option>
//         </select>
//         {/* filtro reset filtros */}
//         <button onClick={manejarClick}>Limpiar</button>
//       </div>
//     </div>
//   );
// }

// export default Filtros;

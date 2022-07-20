import React from 'react';
import UsuTableRow from './UsuTableRow';

 const UsuTable = ({data,setDataToEdit,deleteData}) => {
   return (
     <div>
        <h3>Table de datos</h3>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th>Contraseña</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
            {data.length ===0? 
            <tr>
            <td colSpan="4">
            Sin datos
            </td>
            </tr>:data.map(
                el=><UsuTableRow 
                key={el.id} 
                el={el} 
                setDataToEdit={setDataToEdit} 
                deleteData={deleteData}/>
                )}
            </tbody>
        </table>
     </div>
     );

};

export default UsuTable;
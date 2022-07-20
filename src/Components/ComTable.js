import React from 'react';
import ComTableRow from './ComTableRow.js';

 const ComTable = ({data,setDataToEdit,deleteData}) => {
   return (
     <div>
        <h3>Table de datos</h3>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Comentario</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
            {data.length ===0? 
            <tr>
            <td colSpan="3">
            Sin datos
            </td>
            </tr>:data.map(
                el=><ComTableRow 
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

export default ComTable;
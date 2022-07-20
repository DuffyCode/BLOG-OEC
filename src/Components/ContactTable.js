import React from 'react';
import ContactTableRow from './ContactTableRow';

 const ContactTable = ({data,setDataToEdit,deleteData}) => {
   return (
     <div>
        <h3>Table de datos</h3>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Contacto</th>
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
                el=><ContactTableRow 
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

export default ContactTable;
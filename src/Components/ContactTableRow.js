import React from 'react';

const ContacTableRow = ({el,setDataToEdit,deleteData}) => {
  let {name,contact,id} =el
  return (
    <tr>
    <td>{name}</td>
    <td>{contact}</td>
    <td>
    <button onClick={() => setDataToEdit(el)}>Editar</button>
    <button onClick={() => deleteData(id)}>Eliminar</button>
    </td>
    </tr>
  );
};

export default ContacTableRow;
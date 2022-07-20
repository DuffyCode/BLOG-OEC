import React from 'react';

const UsuTableRow = ({el,setDataToEdit,deleteData}) => {
  let {name,user,password,id} =el
  return (
    <tr>
    <td>{name}</td>
    <td>{user}</td>
    <td>{password}</td>
    <td>
    <button onClick={() => setDataToEdit(el)}>Editar</button>
    <button onClick={() => deleteData(id)}>Eliminar</button>
    </td>
    </tr>
  );
};

export default UsuTableRow;
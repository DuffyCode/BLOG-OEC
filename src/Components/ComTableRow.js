import React from 'react';

const ComTableRow = ({el,setDataToEdit,deleteData}) => {
  let {name,comment,id} =el
  return (
    <tr>
    <td>{name}</td>
    <td>{comment}</td>
    <td>
    <button onClick={() => setDataToEdit(el)}>Editar</button>
    <button onClick={() => deleteData(id)}>Eliminar</button>
    </td>
    </tr>
  );
};

export default ComTableRow;
import React, { useState } from 'react';

import ComForm from './ComForm';
import ComTable from './ComTable';

const initialDb=[
    {
        id:1,
        name:"Jesus",
        comment:"Jgc123",
    },
    {
        id:2,
        name:"Shiryu",
        comment:"Jgc123",
    },
    {
        id:3,
        name:"Hyoga",
        comment:"Jgc123",
    },
    {
        id:4,
        name:"Shun",
        comment:"Jgc123",
    },
    {
        id:5,
        name:"Ikki",
        comment:"Jgc123",
    },
];

const ComApp=()=>{
    const [db, setDb] = useState(initialDb)
    const [dataToEdit, setDataToEdit] = useState(null)

    const createData = (data) => {
        data.id = Date.now();
        //console.log(data);
        setDb([...db,data]);
    }

    const updateData = (data) => {
        let newData = db.map(el =>el.id === data.id ? data:el);
        setDb(newData);
    }
    const deleteData = (id) => {
        let isDelete= window.confirm('¿Estas seguro de eliminar el registro?');
        if (isDelete) {
            let newData =db.filter(el => el.id!==id);
            setDb(newData);
        }else{
            return;
        }
    };

    return(
        <div>
        <h1>Comentarios</h1>
        <article className='grid-1-2'>
        <ComForm
        createData = {createData}
        updateData = {updateData}
        dataToEdit = {dataToEdit}
        setDataToEdit = {setDataToEdit}/>
        <ComTable data = {db}
        setDataToEdit = {setDataToEdit}
        deleteData = {deleteData}/>
        </article>
        <h2>{dataToEdit ? "Editar" : "Agregar"}</h2>
        
        </div>
    );
};

export default ComApp;
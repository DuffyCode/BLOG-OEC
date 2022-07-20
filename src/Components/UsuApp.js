import React, { useState } from 'react';

import UsuForm from './UsuForm.js';
import UsuTable from './UsuTable.js';

const initialDb=[
    {
        id:1,
        name:"Jesus",
        user:"Jgc",
        password:"Jgc123",
    },
    {
        id:2,
        name:"Shiryu",
        user:"pdf",
        password:"Jg56",
    },
    {
        id:3,
        name:"Hyoga",
        user:"halo",
        password:"coer",
    },
    {
        id:4,
        name:"Shun",
        user:"Jgwsdc",
        password:"Jgfghthc",
    },
    {
        id:5,
        name:"Ikki",
        user:"Jg332c",
        password:"Jg556c",
    },
];

const UsuApp=()=>{
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
            <h1>Usuario</h1>
            <article className='grid-1-2'>
            <UsuForm
                createData = {createData}
                updateData = {updateData}
                dataToEdit = {dataToEdit}
                setDataToEdit = {setDataToEdit}/>
                <UsuTable data = {db}
                 setDataToEdit = {setDataToEdit}
                deleteData = {deleteData}/>
            </article>
            <h2>{dataToEdit ? "Editar" : "Agregar"}</h2>    
        </div>
    );
};

export default UsuApp;
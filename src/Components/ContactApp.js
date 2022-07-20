import React, { useState } from 'react';

import ContactForm from './ContactForm.js';
import ContactTable from './ContactTable.js';

const initialDb=[
    {
        id:1,
        name:"Jesus",
        contact:"Jgc123",
    },
    {
        id:2,
        name:"Shiryu",
        contact:"Jgc123",
    },
    {
        id:3,
        name:"Hyoga",
        contact:"Jgc123",
    },
    {
        id:4,
        name:"Shun",
        contact:"Jgc123",
    },
    {
        id:5,
        name:"Ikki",
        contact:"Jgc123",
    },
];

const ContactApp=()=>{
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
        <h1>Contactos</h1>
        <article className='grid-1-2'>
        <ContactForm
        createData = {createData}
        updateData = {updateData}
        dataToEdit = {dataToEdit}
        setDataToEdit = {setDataToEdit}/>
        <ContactTable data = {db}
        setDataToEdit = {setDataToEdit}
        deleteData = {deleteData}/>
        </article>
        <h2>{dataToEdit ? "Editar" : "Agregar"}</h2>
        
        </div>
    );
};

export default ContactApp;
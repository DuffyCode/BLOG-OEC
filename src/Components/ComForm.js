import React, { useState, useEffect } from 'react';

const initialForm={
    name:"",
    comment:"",
    id: null,
}

const ComForm=({createData,updateData,dataToEdit,setDataToEdit})=>{
    const [form, setForm] = useState({initialForm})

    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit);
        }else{
            setForm(initialForm);
        }
    }, [dataToEdit]);

    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (!form.name || !form.comment) {
            alert("Datos incompletos");
            return;
        }
        if (form.id===null) {
            createData(form);
        }else{
            updateData(form);
        }
        handleReset();
    }

    const handleReset=(e)=>{
        setForm(initialForm);
        setDataToEdit(null);

    }
    return(
        <div>

        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name='name'
            placeholder='Nombre'
            onChange={handleChange}
            value={form.name}/>
            <input
            type="text"
            name='comment'
            placeholder='Comentario'
            onChange={handleChange}
            value={form.user}/>
            <input type="submit" value="Enviar"/>
            <input type="reset"  value="Limpiar" onClick={handleReset}/>
        </form>
        </div>
    );
};

export default ComForm;
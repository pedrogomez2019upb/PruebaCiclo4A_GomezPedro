import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Update() {
    let history = useNavigate();
    const [id, setID] = useState(null);
    const [titulo, setTitulo] = useState('');
    const [estado, setEstado] = useState('');
    const [descripcion, setDescripcion] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setTitulo(localStorage.getItem('Titulo'));
        setEstado(localStorage.getItem('Estado'));
        setDescripcion(localStorage.getItem('Descripcion'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://back-endciclo4a.herokuapp.com/api/update/${id}`, {
            titulo,
            estado,
            descripcion
        }).then(() => {
            history.push('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Titulo</label>
                    <input placeholder='Titulo' value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Estado</label>
                    <input placeholder='Estado' value={estado} onChange={(e) => setEstado(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Descripcion</label>
                    <input placeholder='Descripcion' value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Actualizar</Button>
            </Form>
        </div>
    )
}
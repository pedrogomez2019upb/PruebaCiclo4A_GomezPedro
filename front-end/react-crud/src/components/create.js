import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';



function Create() {
    const [titulo, setTitulo] = useState('');
    const [estado, setEstado] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const postData = () => {
        axios.post('https://back-endciclo4a.herokuapp.com/api/post',{
            titulo,
            estado,
            descripcion
        })
        console.log(titulo);
        console.log(estado);
        console.log(descripcion);
    }
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Control placeholder="Titulo" onChange={(e)=> setTitulo(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control placeholder="Estado"  onChange={(e)=> setEstado(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control placeholder="Descripcion"  onChange={(e)=> setDescripcion(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={postData}>
                Submit
            </Button>
        </Form>
    );
}

export default Create;




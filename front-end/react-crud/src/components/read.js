import React, { useEffect, useState } from 'react';
import { Button,Table} from 'react-bootstrap';
import axios from 'axios';


export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://back-endciclo4a.herokuapp.com/api/get`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let {titulo, estado, descripcion} = data;
        localStorage.setItem('titulo', titulo);
        localStorage.setItem('estado', estado);
        localStorage.setItem('descripcion', descripcion);
    }

    const getData = () => {
        axios.get(`https://back-endciclo4a.herokuapp.com/api/get`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://back-endciclo4a.herokuapp.com/api/getOne/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Titulo</Table.HeaderCell>
                        <Table.HeaderCell>Estado</Table.HeaderCell>
                        <Table.HeaderCell>Descripcion</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.titulo}</Table.Cell>
                                <Table.Cell>{data.estado}</Table.Cell>
                                <Table.Cell>{data.descripcion}</Table.Cell>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Eliminar</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}
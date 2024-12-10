import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import { API_URL } from '../Constant/URL';
import { Button, Table } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

const Read = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const deleteUser = async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        fetchData(); 
    };

    const fetchData = async () => {
        const resp = await axios.get(API_URL);
        setData(resp.data);
    };

    const updateUser = (item) => {
        localStorage.setItem('ID', item.id);
        localStorage.setItem('firstName', item.firstName);
        localStorage.setItem('lastName', item.lastName);
        localStorage.setItem('checked', item.checked);
        
        navigate('/Set');
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {data.length > 0 ? (
                        data.map(item => (
                            <Table.Row key={item.id}>
                                <Table.Cell>{item.firstName}</Table.Cell>
                                <Table.Cell>{item.lastName}</Table.Cell>
                                <Table.Cell>{item.checked ? 'Yes' : 'No'}</Table.Cell>
                                <Table.Cell>
                                    <Button onClick={() => deleteUser(item.id)}>Delete</Button>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button onClick={() => updateUser(item)}>Update</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    ) : (
                        <Table.Row>
                            <Table.Cell colSpan="5">No entries found</Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </div>
    );
};

export default Read;
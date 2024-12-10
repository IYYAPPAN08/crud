import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../Constant/URL'; 
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [first, setFirst] = useState("");
    const [sec, setSec] = useState("");
    const [thi, setThi] = useState(false);
    const navigate = useNavigate();

    const postData = async (event) => {
        event.preventDefault(); 
        await axios.post(API_URL, {
            firstName: first, 
            lastName: sec,
            checked: thi,
        });
        navigate('/read');
        setFirst("");
        setSec("");
        setThi(false);
    };

    return (
        <div>
            <h2>Create Operation</h2>
            <Form className='form' onSubmit={postData}>
                <Form.Field>
                    <label>First Name</label>
                    <input 
                        placeholder='Enter First Name'  
                        value={first} 
                        onChange={ev => setFirst(ev.target.value)}  
                    />
                </Form.Field>
                
                <Form.Field>
                    <label>Last Name</label>
                    <input 
                        placeholder='Enter Last Name' 
                        value={sec} 
                        onChange={ev => setSec(ev.target.value)} 
                    />
                </Form.Field>
                
                <Form.Field>
                    <Checkbox 
                        label="I agree to the Terms and Conditions" 
                        checked={thi} 
                        onChange={() => setThi(!thi)} 
                    />
                </Form.Field>
                
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    );
};

export default Create;
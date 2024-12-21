import { useState, useEffect } from 'react';
import { useDB } from '../Contexts/dbContext';
import { Container, Form, FormGroup, Label, Input, Card, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Initiate () {
    const [locations, setLocations] = useState();
    const { auditInit } = useDB();
    const [active, setActive] = useState();
    const [startEnable, setStartEnable] = useState(true);

    useEffect(() => {
        const locals = async() => {
            try {
                const response = await fetch('http://localhost:3000/locations');
                const json = await response.json()
                setLocations(json[0].locations);
            } catch (error) {
                console.log(error)
            }
        }
        locals();
    },[])

    const handleChange = (e) => {
        setActive({location: e.target.value});
        setStartEnable(false);
    }

    function handleStart() {
        try {
            const response = auditInit(active);
            const json = response.json();
            console.log(json);
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <Container className='mt-3'>
            {locations && 
                <Card className='p-3'>
                    <Form className='p-3'>
                        <FormGroup>
                            <Label for='location'>
                                Select Location
                            </Label>
                            <Input id='location' name='location' type='select' onChange={handleChange}>
                                <option key='100'>
                                    Click for options
                                </option>
                                {locations.map((location, index) => {
                                    return(
                                        <option key={index}>
                                            {location}
                                        </option>
                                    )
                                })}
                            </Input>
                        </FormGroup>
                    </Form>
                    <Button disabled={startEnable} className='btn btn-primary' onClick={handleStart} >Start Audit</Button>
                </Card>
            }
        </Container>
    )
}
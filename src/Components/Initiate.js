import { useState, useEffect,useContext } from 'react';
import useDB from '../Contexts/dbContext';
import { Container, Form, FormGroup, Label, Input, Card } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Initiate () {
    const [locations, setLocations] = useState();
    const { auditInit } = useContext(useDB);

    useEffect(() => {
        const locals = async() => {
            try {
                const response = await fetch('http://localhost:3000/locations');
                const json = await response.json()
                console.log(json[0].locations)
                setLocations(json[0].locations);
            } catch (error) {
                console.log(error)
            }
        }
        locals();
    },[])

    const [active, setActive] = useState('Select Location')

    const handleChange = (e) => {
        setActive(e.target.value);
    }

    return (
        <Container className='mt-3'>
            {locations && 
                <Card>
                    <Form className='p-3'>
                        <FormGroup>
                            <Label for='location'>
                                Select Location
                            </Label>
                            <Input id='location' name='location' type='select' onChange={handleChange}>
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
                </Card>
            }
        </Container>
    )
}
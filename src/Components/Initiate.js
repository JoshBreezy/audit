import { useState, useEffect } from 'react';
import { useDB } from '../Contexts/dbContext';
import { Container, Form, FormGroup, Label, Input, Card, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

export default function Initiate () {
    const [locations, setLocations] = useState();
    const { defaultAudit, setAudit, URL, token, user } = useDB();
    const [active, setActive] = useState();
    const [startEnable, setStartEnable] = useState(true);
    const navigate= useNavigate();

    useEffect(() => {
        const locals = async() => {
            try {
                const response = await fetch(`${URL}/locations`,
                    {headers: {'Authorization': `Bearer ${token}`}}
                );
                const json = await response.json();
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

    async function handleStart() {
        try{
            const response = await fetch(`${URL}/audits`,{
                method: 'POST',
                headers: {'Content-Type' : 'application/json', 'Authorization': `Bearer ${token}`},
                body: JSON.stringify({
                    location: active.location,
                    author: user.username,
                    authorID: user._id
                })
            })
            const json = await response.json();
            const updatedAudit = {...defaultAudit, _id: json._id, location: active.location, author: user.username, authorID : user._id};
            setAudit(updatedAudit);
            navigate('/auditstart');
        } catch (error) {
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
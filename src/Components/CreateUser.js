import { Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Container, Button, Alert } from 'reactstrap';
import { useState } from 'react';
import { useDB } from '../Contexts/dbContext';
import { useNavigate } from 'react-router-dom';


export default function CreateUser() {

    const navigate = useNavigate();

    const { URL } = useDB();
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [formState, setFormState] = useState({
        email: "",
        password: "",
        passwordConfirm: "",
    });

    function handleForm(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setLoading(true);
            if (formState.password === formState.passwordConfirm) {
                const response = await fetch(`${URL}/users/signup`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({"username": formState.email, "password": formState.password })
                });
                const json = await response.json();
                setResponse(json);
                setLoading(false);
                navigate('/audit');
            } else {
                setError({message: "Passwords do not match"});
                setLoading(false);
            }
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }
    return (
        <Container>
            <Card className='mt-3 col-5'>
                <CardHeader>Please Register</CardHeader>
                <CardBody>
                    <Form>
                        <FormGroup>
                            <Label for='email'>
                                Email
                            </Label>
                            <Input
                                type="text"
                                name="email"
                                placeholder="Email Address"
                                onChange={handleForm}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='password'>
                                Password
                            </Label>
                            <Input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={handleForm}
                            />
                            <Input
                                type="password"
                                name="passwordConfirm"
                                placeholder="Confirm Password"
                                onChange={handleForm}
                            />
                        </FormGroup>
                    </Form>
                    <Button type='submit' onClick={handleSubmit} disabled={loading} color='primary'>Submit</Button>
                    <Button className='ml-2' color='primary' href='/audit'>Login</Button>
                    {error && <Alert className='mt-3' color='danger'>{error.message}</Alert>}
                </CardBody>
            </Card>
        </Container>
    )
}

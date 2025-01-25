import { Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Container, Button, Alert } from 'reactstrap';
import { useState } from 'react';
import { useDB } from '../Contexts/dbContext';
import { useNavigate } from 'react-router-dom';


export default function Login() {

    const { URL, token, setToken } = useDB();
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [formState, setFormState] = useState({
        email: "",
        password: "" 
    });

    const navigate = useNavigate();

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
            const response = await fetch(`${URL}/users/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({"username": formState.email, "password": formState.password })
            });
            const json = await response.json();
            setResponse(json);
            setToken(json.token);
            setLoading(false);
            navigate('/audit/landing');
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }
    return (
        <Container>
            <Card className='mt-3 col-5'>
                <CardHeader>Please Login</CardHeader>
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
                        </FormGroup>
                    </Form>
                    <Button type='submit' onClick={handleSubmit} disabled={loading} color='primary'>Submit</Button>
                    <Button color='link' href='/audit/signup'>Register</Button>
                </CardBody>
                {error && <Alert color='danger'>{error.message}</Alert>}
            </Card>
        </Container>
    )
}

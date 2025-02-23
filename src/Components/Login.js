import { Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Container, Button, Alert } from 'reactstrap';
import { useState } from 'react';
import { useDB } from '../Contexts/dbContext';
import { useNavigate, Link } from 'react-router-dom';


export default function Login() {

    const { URL, setToken, setUser, error, setError } = useDB();
    const [loading, setLoading] = useState(false);
    const [formState, setFormState] = useState({
        username: "",
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
                body: JSON.stringify({"username": formState.username, "password": formState.password })
            });
            const json = await response.json();
            setToken(json.token);
            setUser(json.user);
            setLoading(false);
            navigate('/landing');
        } catch (error) {
            setError(error);
            console.log(error);
            setLoading(false);
        }
    }
    return (
        <Container>
            <Card className='mt-3 col-7'>
                <CardHeader>Please Login</CardHeader>
                <CardBody>
                    <Form>
                        <FormGroup>
                            <Label for='username'>
                                Username
                            </Label>
                            <Input
                                type="text"
                                name="username"
                                placeholder="Username"
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
                    <Link className='btn btn-primary ml-2' to='/signup'>Register</Link>
                </CardBody>
                {error && <Alert color='danger'>{error.message}</Alert>}
            </Card>
        </Container>
    )
}

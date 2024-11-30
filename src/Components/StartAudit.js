import {Button, Form, Container, Row, Card, CardTitle, CardBody, CardText, FormGroup, Input, Label } from 'reactstrap';
import RenderChecklist from './RenderChecklist';
import frontEntryArea from '../Lists/Environment/FrontOfHouse/FrontEntryArea';
import diningArea from '../Lists/Environment/FrontOfHouse/DiningArea';

export default function StartAudit () {
    return (
        <>
            <Container>
                <Row>
                    <Card className='col-9'>
                        <CardTitle><h3>Environment</h3></CardTitle>
                    </Card>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Card className='col-12'>
                        <CardTitle><h5>Part 1: Front of house</h5></CardTitle>
                        <CardBody>
                            <CardText>Front Entry Area</CardText>
                            <Form>
                                <RenderChecklist props={frontEntryArea} />
                            </Form>
                        </CardBody>
                    </Card>
                </Row>
            </Container>
            <Container>
                <Card className='col-12'>
                    <CardBody>
                    <CardText>Dining Area</CardText>
                        <Form>
                            <RenderChecklist props={diningArea} />
                        </Form>
                    </CardBody>
                </Card>
            </Container>
        </>
    );
}
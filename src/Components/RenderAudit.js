import {Button, Form, Container, Row, Card, CardTitle, CardBody, CardText, FormGroup, Input, Label } from 'reactstrap';
import RenderChecklist from './RenderChecklist';
import TableOfContents from './TableOfContents';
import frontEntryArea from '../Lists/Environment/FrontOfHouse/FrontEntryArea';
import { useDB } from '../Contexts/dbContext';
import { useState } from 'react';

export default function RenderAudit () {

    const {section, part, subdivision, audit} = useDB();

    return (
        <>
            <Container>
                <Row>
                    <Card className='col-9'>
                        <CardTitle><h3>{section}</h3></CardTitle>
                    </Card>
                </Row>
            </Container>
            <div className='row'>
                <TableOfContents />
                <Container className='col-9'>
                    <Row>
                        <Card className='col-12'>
                            <CardTitle><h5>{part}</h5></CardTitle>
                            <CardBody>
                                <CardText>{subdivision}</CardText>
                                <Form>
                                    <RenderChecklist />
                                </Form>
                            </CardBody>
                        </Card>
                    </Row>
                </Container>
            </div>
        </>
    );
}
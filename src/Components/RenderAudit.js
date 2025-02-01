import { Form, Container, Row, Card, CardTitle, CardBody, CardText } from 'reactstrap';
import RenderChecklist from './RenderChecklist';
import TableOfContents from './TableOfContents';
import { useDB } from '../Contexts/dbContext';
import { useEffect } from 'react';
import { update } from 'lodash';

export default function RenderAudit () {

    const {section, part, subdivision, audit, updateAudit} = useDB();

/*    useEffect(() => {
        async function updateDB(audit) {
            try {
                const response = await fetch(`${URL}/audits:${audit._id}`, {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(audit)
                });
                const json = await response.json();
                console.log(json);
            } catch (error) {
                console.log(error);
            }
        }
        updateDB(audit);
    }, [audit]);

*/
    useEffect(() => {
        updateAudit(audit);
    }, [audit, updateAudit]);


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
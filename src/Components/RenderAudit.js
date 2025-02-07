import { Form, Container, Row, Card, CardTitle, CardBody, CardText } from 'reactstrap';
import RenderChecklist from './RenderChecklist';
import TableOfContents from './TableOfContents';
import RenderGet from './RenderGET';
import { useDB } from '../Contexts/dbContext';
import { useEffect } from 'react';

export default function RenderAudit () {

    const {section, part, subdivision, audit, updateAudit} = useDB();

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
                                    {(section === 'Environment' || section === 'Team Training & Development') && <RenderChecklist />}
                                    {section === 'Guest Experience' && <RenderGet props={audit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist} />}
                                </Form>
                            </CardBody>
                        </Card>
                    </Row>
                </Container>
            </div>
        </>
    );
}
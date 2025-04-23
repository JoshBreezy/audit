import { Form, Container, Row, Card, CardTitle, CardBody } from 'reactstrap';
import RenderChecklist from './RenderChecklist';
import TableOfContents from './TableOfContents';
import RenderDiningGet from './RenderDiningGET';
import RenderBarGet from './RenderBarGET';
import KitchDrop from './KitchDrop';
import RenderTD from './RenderTD';
import RenderWalk from './RenderWalk';
import RenderFoodAudit from './RenderFoodAudit';
import RenderFocused from './RenderFocused';
import RenderDetail from './RenderDetail';
import { useDB } from '../Contexts/dbContext';

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
                                <h5>{subdivision}</h5>
                                <Form>
                                    {((section === 'Environment' && subdivision !== 'Walk-Through' ) || (section === 'Operations' && part === 'Bar')) && <RenderChecklist props={audit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist} />}
                                    {(section === 'Guest Experience' && subdivision === 'Dining Room' ) && <RenderDiningGet props={audit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist} />}
                                    {(section === 'Guest Experience' && subdivision === 'Bar' ) && <RenderBarGet props={audit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist} />}
                                    {(section === 'Operations' && part === 'Kitchen') && <KitchDrop props={audit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist} /> }
                                    {section === 'Team Training & Development' && <RenderTD props={audit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist} /> }
                                    {(section === 'Environment' && subdivision === 'Walk-Through') && <RenderWalk props={audit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist} />}
                                    {(section === 'Quality Control' && subdivision === 'Food Audit') && <RenderFoodAudit props={audit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision)} />}
                                    {(section === 'Quality Control' && subdivision === 'Focused Menu Items') && <RenderFocused props={audit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist} />}
                                    {(section === 'Quality Control' && subdivision === 'Attention To Detail') && <RenderDetail props={audit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist} />}
                                </Form>
                            </CardBody>
                        </Card>
                    </Row>
                </Container>
            </div>
        </>
    );
}
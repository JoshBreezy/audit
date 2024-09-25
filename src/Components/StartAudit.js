import {Button, Form, Container, Row, Card, CardTitle, CardBody, CardText, FormGroup, Input, Label } from 'reactstrap';

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
                                <FormGroup check>
                                    <Input type='checkbox' id='' name='' />
                                    <Label check>
                                    exterior entrance area broom-swept and free of debris and litter
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input type='checkbox' id='' name='' />
                                    <Label check>
                                    entry door kickplates and thresholds clean
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input type='checkbox' id='' name='' />
                                    <Label check>
                                    entry door glass clean
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input type='checkbox' id='' name='' />
                                    <Label check>
                                    entry mat clean (not soiled) and broom-swept
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input type='checkbox' id='' name='' />
                                    <Label check>
                                    floors broom-swept and clean
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input type='checkbox' id='' name='' />
                                    <Label check>
                                    baseboards clean and well-maintained
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input type='checkbox' id='' name='' />
                                    <Label check>
                                    upholstered furniture in Waiting Area well-maintained
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input type='checkbox' id='' name='' />
                                    <Label check>
                                    window ledges clean and free of debris
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input type='checkbox' id='' name='' />
                                    <Label check>
                                    windows clean
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input type='checkbox' id='' name='' />
                                    <Label check>
                                    perimeter walls clean and well-maintained
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input type='checkbox' id='' name='' />
                                    <Label check>
                                    Greeters stand clean and well-organized
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input type='checkbox' id='' name='' />
                                    <Label check>
                                    Greeters stand well-maintained
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input type='checkbox' id='' name='' />
                                    <Label check>
                                    POS system and telephone clean and in good repair
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input type='checkbox' id='' name='' />
                                    <Label check>
                                    menus clean and well-maintained
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input type='checkbox' id='' name='' />
                                    <Label check>
                                    merchandise properly displayed
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input type='checkbox' id='' name='' />
                                    <Label check>
                                    waste bin (interior and exterior )clean
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input type='checkbox' id='' name='' />
                                    <Label check>
                                    high ceiling area clean and well-maintained (lighting fixtures, ductwork, etc.)
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input type='checkbox' id='' name='' />
                                    <Label check>
                                    air-conditioning vents clean and dust free
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input type='checkbox' id='' name='' />
                                    <Label check>
                                    lighting fixtures (including exit signs) fully operational – no burnt-out light bulbs
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Input type='checkbox' id='' name='' />
                                    <Label check>
                                    no evidence of pest activity (10 points)
                                    </Label>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Row>
            </Container>
        </>
    );
}
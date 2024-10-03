import {Container, Row, Modal, ModalBody, Form, FormGroup, Label, Input, ModalHeader, ModalFooter, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import { useState } from 'react';




export default function Landing () {

  const [login, setLogin] = useState(true);
  const toggleLogin = () => {
    setLogin(!login);
  }

    return (
      <Container>
        <Row className='p-4'>
          <div className='col-5 d-flex justify-content-center'><Link to='/auditstart' className='btn btn-primary btn-lg'>Start New Audit</Link></div>
          <div className='col-5 d-flex justify-content-center'><Link to='/viewprev' className='btn btn-primary btn-lg'>View Previous Audits</Link></div>
        </Row>
        <Modal isOpen={login} toggle={toggleLogin} >
          <ModalHeader>
            Please Login
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for='email'>
                  Email
                </Label>
                <Input 
                  id='email'
                  name='email'
                  type='email'
                />
              </FormGroup>
              <FormGroup>
                <Label for='password'>
                  Password
                </Label>
                <Input 
                  id='password'
                  name='password'
                  type='password'
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={toggleLogin}>Submit</Button>
            <Button color='danger' onClick={toggleLogin}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Container>
    )
}

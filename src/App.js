import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardTitle, CardBody, Row, Container, Modal, ModalBody, ModalFooter, ModalHeader, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {Routes, Route, Link} from 'react-router-dom';
import Landing from './Components/Landing';
import RenderAudit from './Components/RenderAudit';
import Initiate from './Components/Initiate';
import ViewPreviousAudit from './Components/ViewPreviousAudit';
import VenturaQ3 from './Components/VenturaQ3';
import { useState } from 'react';


function App() {

  const [hasLogged, setHasLogged] = useState(false);
  const toggleLogin = () => {
    !hasLogged && setHasLogged(!hasLogged);
  }


  return (
    <div className="App">
      <Modal isOpen={!hasLogged} toggle={toggleLogin} >
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
      <Container>
        <Row>
            <Card className='col-12'>
              <CardBody>
                <CardTitle tag="h1">
                  Audit
                </CardTitle>
              </CardBody>
            </Card>
        </Row>
      </Container>
      <Routes>
        <Route path='/audit' element={<Landing />} />
        <Route path='/audit/initiate' element={<Initiate />} />
        <Route path='/audit/auditstart' element={<RenderAudit />} />
        <Route path='/audit/viewprev' element={<ViewPreviousAudit />} />
        <Route path='/audit/viewprev/VenturaQ3' element={<VenturaQ3 />} />
      </Routes>
    </div>
  );
}

export default App;

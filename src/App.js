import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardTitle, CardBody, Row, Container, Modal, ModalBody, ModalFooter, ModalHeader, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {Routes, Route, Link} from 'react-router-dom';
import Landing from './Components/Landing';
import RenderAudit from './Components/RenderAudit';
import Initiate from './Components/Initiate';
import ViewPreviousAudit from './Components/ViewPreviousAudit';
import VenturaQ3 from './Components/VenturaQ3';
import CreateUser from './Components/CreateUser';
import Login from './Components/Login';


function App() {


  return (
    <div className="App">
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
        <Route path='/audit' element={<Login />} />
        <Route path='/audit/signup' element={<CreateUser />} />
        <Route path='/audit/landing' element={<Landing />} />
        <Route path='/audit/initiate' element={<Initiate />} />
        <Route path='/audit/auditstart' element={<RenderAudit />} />
        <Route path='/audit/viewprev' element={<ViewPreviousAudit />} />
        <Route path='/audit/viewprev/VenturaQ3' element={<VenturaQ3 />} />
      </Routes>
    </div>
  );
}

export default App;

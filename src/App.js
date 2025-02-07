import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardTitle, CardBody, Row, Container } from 'reactstrap';
import {Routes, Route} from 'react-router-dom';
import Landing from './Components/Landing';
import RenderAudit from './Components/RenderAudit';
import Initiate from './Components/Initiate';
import ViewPreviousAudit from './Components/ViewPreviousAudit';
import VenturaQ3 from './Components/VenturaQ3';
import CreateUser from './Components/CreateUser';
import Login from './Components/Login';
import RenderGet from './Components/RenderGET';


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
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<CreateUser />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/initiate' element={<Initiate />} />
        <Route path='/auditstart' element={<RenderAudit />} />
        <Route path='/viewprev' element={<ViewPreviousAudit />} />
        <Route path='/viewprev/VenturaQ3' element={<VenturaQ3 />} />
      </Routes>
    </div>
  );
}

export default App;

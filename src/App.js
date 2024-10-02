import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardTitle, CardBody, Row, Container} from 'reactstrap';
import {Routes, Route, Link} from 'react-router-dom';
import Landing from './Components/Landing';
import StartAudit from './Components/StartAudit';
import ViewPreviousAudit from './Components/ViewPreviousAudit';
import VenturaQ3 from './Components/VenturaQ3';


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
        <Route path='/audit' element={<Landing />} />
        <Route path='/auditstart' element={<StartAudit />} />
        <Route path='/viewprev' element={<ViewPreviousAudit />} />
        <Route path='/viewprev/VenturaQ3' element={<VenturaQ3 />} />
      </Routes>
    </div>
  );
}

export default App;

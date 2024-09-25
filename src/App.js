import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardTitle, CardBody, Row, Container} from 'reactstrap';
import {Routes, Route, Link} from 'react-router-dom';
import Landing from './Components/Landing';
import StartAudit from './Components/StartAudit';

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
        <Route path='/' element={<Landing />} />
        <Route path='/auditstart' element={<StartAudit />} />
      </Routes>
    </div>
  );
}

export default App;

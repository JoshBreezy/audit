import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardTitle, CardBody, Row, Container, Modal, ModalBody, Alert } from 'reactstrap';
import {Routes, Route} from 'react-router-dom';
import { useDB } from './Contexts/dbContext';
import { useEffect } from 'react';
import Landing from './Components/Landing';
import RenderAudit from './Components/RenderAudit';
import Initiate from './Components/Initiate';
import ViewPreviousAudit from './Components/ViewPreviousAudit';
import VenturaQ3 from './Components/VenturaQ3';
import CreateUser from './Components/CreateUser';
import Login from './Components/Login';
import UnfinishedList from './Components/UnfinishedList';


function App() {

  const { error, setError } = useDB();
  
  useEffect(() => {
    setTimeout(() => {
      setError(null);
    }, 4000)
  },[error])


  return (
    <div className="App">
      <Row className='d-flex'>
            <Card className='col-9'>
              <CardBody>
                <CardTitle tag="h1">
                  Audit
                </CardTitle>
              </CardBody>
            </Card>
      </Row>
      {error && <Container><Row><Alert color='danger' centered>{error}</Alert></Row></Container>}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<CreateUser />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/initiate' element={<Initiate />} />
        <Route path='/auditstart' element={<RenderAudit />} />
        <Route path='/selectUnfinished' element={<UnfinishedList />} />
        <Route path='/viewprev' element={<ViewPreviousAudit />} />
        <Route path='/viewprev/VenturaQ3' element={<VenturaQ3 />} />
      </Routes>
    </div>
  );
}

export default App;

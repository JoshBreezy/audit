import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardTitle, CardBody, CardText, Row, Container} from 'reactstrap';

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
    </div>
  );
}

export default App;

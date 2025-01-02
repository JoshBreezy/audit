import {Container, Row } from 'reactstrap';
import {Link} from 'react-router-dom';




export default function Landing () {


    return (
      <>
        <Container>
          <Row className='pt-4'>
            <div className='col-11 d-flex justify-content-center'><Link to='/audit/initiate' className='btn btn-primary btn-lg'>Start New Audit</Link></div>
          </Row>
        </Container>
        <Container>
          <Row className='pt-4'>
            <div className='col-11 d-flex justify-content-center'><Link to='/audit/viewprev' className='btn btn-primary btn-lg'>View Previous Audits</Link></div>
          </Row>
        </Container>
      </>
    )
}

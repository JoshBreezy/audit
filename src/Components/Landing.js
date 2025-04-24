import {Container, Row } from 'reactstrap';
import {Link} from 'react-router-dom';
import { useDB } from '../Contexts/dbContext';




export default function Landing () {

  const { user } = useDB();

    return (
      <>
        <Container>
          <Row className='pt-4'>
            {user.admin && <div className='col-11 d-flex justify-content-center'><Link to='/initiate' className='btn btn-primary btn-lg'>Start New Audit</Link></div>}
          </Row>
        </Container>
        <Container>
          <Row className='pt-4'>
            <div className='col-11 d-flex justify-content-center'><Link to='/viewprev' className='btn btn-primary btn-lg'>View Completed Audits</Link></div>
          </Row>
        </Container>
        <Container>
          <Row className='pt-4'>
            {user.admin && <div className='col-11 d-flex justify-content-center'><Link to='/selectUnfinished' className='btn btn-primary btn-lg'>Continue Unfinished Audit</Link></div> }
          </Row>
        </Container>
      </>
    )
}

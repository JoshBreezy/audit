import { useDB } from '../Contexts/dbContext';
import { Container, Row } from 'reactstrap';

export default function FrontPage() {

    const {audit} = useDB();

    return (
        <Container>
            <Row>
                <div className='col-auto'>
                    <h5 className ='align-text-center'>Total Section Scores</h5>
                </div>
            </Row>
        </Container>
    )
}
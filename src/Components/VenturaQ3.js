import { Container } from 'reactstrap';
import oldAudit from '../OldAudits/oldAudit.pdf';

export default function VenturaQ3 () {
    return (
        <Container className='vh-100'>
            <embed src ={oldAudit} className='col-12' />
        </Container>
    )
};